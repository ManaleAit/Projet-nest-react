import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { Candidature } from './candidature.entity';
import { CandidatureRepository } from './candidature.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCandidatureDTO } from './dto/createCandidatureDTO';
import { Filiere } from 'src/filieres/filiere.entity';
import { FiliereRepository } from 'src/filieres/filiere.repository';
import { AuthDTO } from './dto/AuthDTO';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CandidaturesService {
  constructor(
    @InjectRepository(CandidatureRepository)
    private candidatureRepository: CandidatureRepository,
    private filiereRepository: FiliereRepository,
    private jwtService: JwtService,
  ) {}

  async getAllCandidatures(): Promise<Candidature[]> {
    return await this.candidatureRepository.find();
  }

  async createCandidature(createCandDTO: CreateCandidatureDTO): Promise<void> {
    // generate salt
    const salt = await bcrypt.genSalt();

    // create new candidature
    var cand = this.candidatureRepository.create();
    cand.massar = createCandDTO.massar;
    cand.cin = createCandDTO.cin;
    cand.nom = createCandDTO.nom;
    cand.prenom = createCandDTO.prenom;
    cand.email = createCandDTO.email;
    cand.pass_salt = salt;
    cand.password = await this.hashPassword(createCandDTO.password, salt);
    cand.photo = createCandDTO.photo;
    cand.niveau = createCandDTO.niveau;
    cand.adresse = createCandDTO.adresse;
    cand.date_naissance = createCandDTO.date_naissance;
    cand.created_at = new Date();
    cand.updated_at = new Date();

    // Get the filiere object from the id
    let filiere: Filiere = await this.filiereRepository.findOne({
      id_filiere: createCandDTO.id_filiere,
    });
    cand.filiere = filiere;
    
    try {
        await this.candidatureRepository.insert(cand);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Code Massar , CIN or Email Already Exist');
      }else {
        throw new InternalServerErrorException();
      }
    }
  }

  async signIn(authDTO: AuthDTO): Promise<{ accessToken: string }> {
    const { massar, email, password } = authDTO;

    const candidature = await this.candidatureRepository.findOne({
      email,
      massar,
    });

    if (candidature) {
      if (await candidature.validatePassword(password)) {
        const payload: JwtPayload = { massar, email };

        const accessToken = await this.jwtService.sign(payload);

        return { accessToken };
      } else {
        throw new UnauthorizedException('Invalid Credentials');
      }
    } else {
      throw new UnauthorizedException('Invalid Credentials');
    }
  }

  async hashPassword(password: string, salt: string): Promise<string> {
    return await bcrypt.hash(password, salt);
  }
}

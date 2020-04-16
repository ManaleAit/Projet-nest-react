import {
    Injectable,
    ConflictException,
    InternalServerErrorException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { etudiant_cp } from './etudiant_cp.entity';
  import { etudiant_cpRepository } from './etudiant_cp.repository';
  import { InjectRepository } from '@nestjs/typeorm';
  import { CreateEtudiant_cpDTO } from './dto/createEtudiantDTO';
  import { FiliereRepository } from 'src/filieres/filiere.repository';
  import { AuthDTO } from './dto/AuthDTO';
  import { JwtService } from '@nestjs/jwt';
  import * as bcrypt from 'bcrypt';
  import { JwtPayload } from 'src/etudiant_ci/jwt-payload.interface';
@Injectable()
export class Etudiant_cpService {

    constructor(
        @InjectRepository(etudiant_cpRepository)
        private etudiant_cpRepository: etudiant_cpRepository,
        private filiereRepository: FiliereRepository,
        private jwtService: JwtService,
      ) {}
    
      async getAllEtudiants(): Promise<etudiant_cp[]> {
        return await this.etudiant_cpRepository.find();
      }
    
      async createEtudiant_ci(reateEtudiant_cpDTO: CreateEtudiant_cpDTO): Promise<void> {
        // generate salt
        const salt = await  bcrypt.genSalt();
       
        
        
        // create new etudiant
        var Et = this.etudiant_cpRepository.create();
        Et.massar=reateEtudiant_cpDTO.massar;
        Et.cin=reateEtudiant_cpDTO.cin;
        Et.validated=reateEtudiant_cpDTO.validated;
        Et.lastname_ar=reateEtudiant_cpDTO.lastname_ar;
        Et.lastname_fr=reateEtudiant_cpDTO.lastname_fr;
        Et.firstname_ar=reateEtudiant_cpDTO.firstname_ar;
        Et.firstname_fr=reateEtudiant_cpDTO.firstname_fr;
        Et.note=reateEtudiant_cpDTO.note;
        Et.pass_salt=salt;
        
        Et.password = await this.hashPassword(reateEtudiant_cpDTO.password, salt);
       
        Et.natio=reateEtudiant_cpDTO.natio;
        Et.address=reateEtudiant_cpDTO.address;
        Et.phone=reateEtudiant_cpDTO.phone;
        Et.father_job=reateEtudiant_cpDTO.father_job;
        Et.father_name=reateEtudiant_cpDTO.father_name;
        Et.mother_name=reateEtudiant_cpDTO.mother_name;
        Et.mother_job=reateEtudiant_cpDTO.mother_job;
        Et.parents_address=reateEtudiant_cpDTO.parents_address;
        Et.parents_phone=reateEtudiant_cpDTO.parents_phone;
        Et.annee=reateEtudiant_cpDTO.annee;
        Et.type_bac=reateEtudiant_cpDTO.type_bac;
        Et.mention_bac=reateEtudiant_cpDTO.mention_bac;
        Et.annee_bac=reateEtudiant_cpDTO.annee_bac;
        Et.lycee=reateEtudiant_cpDTO.lycee;
        Et.delegation=reateEtudiant_cpDTO.delegation;
        Et. academie=reateEtudiant_cpDTO.academie;
        Et. picture=reateEtudiant_cpDTO. picture;
        Et.email=reateEtudiant_cpDTO.email;
        Et.niveau_cp=reateEtudiant_cpDTO.niveau_cp;
       
          
      
        try {
            await this.etudiant_cpRepository.insert(Et);
        } catch (error) {
          if (error.code === 'ER_DUP_ENTRY') {
            throw new ConflictException('Code Massar , CIN or Email Already Exist');
          }else {
            throw new InternalServerErrorException();
          }
        }
      }
    
      
      async getOne(massar:string): Promise<etudiant_cp> {
        return await this.etudiant_cpRepository.findOne(massar);
      }



      async signIn(authDTO: AuthDTO): Promise<{ accessToken: string }> {
        const { massar, email, password } = authDTO;
    
        const etudiant_cp = await this.etudiant_cpRepository.findOne({
          email,
          massar,
        });
    
        if (etudiant_cp) {
          if (await etudiant_cp.validatePassword(password)) {
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
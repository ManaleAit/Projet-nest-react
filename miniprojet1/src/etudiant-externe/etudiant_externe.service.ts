import {
    Injectable,
    ConflictException,
    InternalServerErrorException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { etudiant_externe } from './etudiant_externe.entity';
  import { etudiant_externeRepository } from './etudiant_externe.repository';
  import { InjectRepository } from '@nestjs/typeorm';
  import {  CreateEtudiant_exDTO} from './dto/createEtudiantDTO';
  import { Filiere } from 'src/filieres/filiere.entity';
  import { FiliereRepository } from 'src/filieres/filiere.repository';
  import { AuthDTO } from './dto/AuthDTO';
  import { JwtService } from '@nestjs/jwt';
  import * as bcrypt from 'bcrypt';
  import { JwtPayload } from 'src/etudiant-externe/jwt-payload.interface';
@Injectable()
export class etudiant_externeService {

    constructor(
        @InjectRepository(etudiant_externeRepository)
        private etudiant_externeRepository: etudiant_externeRepository,
        private filiereRepository: FiliereRepository,
        private jwtService: JwtService,
      ) {}
    
      async getAllEtudiants(): Promise<etudiant_externe[]> {
        return await this.etudiant_externeRepository.find();
      }
    
      async createetudiant_externe(reateetudiant_externeDTO:CreateEtudiant_exDTO): Promise<void> {
        // generate salt
        const salt = await  bcrypt.genSalt();
       
        
        
        // create new etudiant
        var Et = this.etudiant_externeRepository.create();
        Et.massar=reateetudiant_externeDTO.massar;
        Et.cin=reateetudiant_externeDTO.cin;
        Et.validated=reateetudiant_externeDTO.validated;
        Et.lastname_ar=reateetudiant_externeDTO.lastname_ar;
        Et.lastname_fr=reateetudiant_externeDTO.lastname_fr;
        Et.firstname_ar=reateetudiant_externeDTO.firstname_ar;
        Et.firstname_fr=reateetudiant_externeDTO.firstname_fr;
        Et.note=reateetudiant_externeDTO.note;
        Et.pass_salt=salt;
        
        Et.password = await this.hashPassword(reateetudiant_externeDTO.password, salt);
       
        Et.natio=reateetudiant_externeDTO.natio;
        Et.address=reateetudiant_externeDTO.address;
        Et.phone=reateetudiant_externeDTO.phone;
        Et.father_job=reateetudiant_externeDTO.father_job;
        Et.father_name=reateetudiant_externeDTO.father_name;
        Et.mother_name=reateetudiant_externeDTO.mother_name;
        Et.mother_job=reateetudiant_externeDTO.mother_job;
        Et.parents_address=reateetudiant_externeDTO.parents_address;
        Et.parents_phone=reateetudiant_externeDTO.parents_phone;
        Et.annee=reateetudiant_externeDTO.annee;
        Et.type_bac=reateetudiant_externeDTO.type_bac;
        Et.mention_bac=reateetudiant_externeDTO.mention_bac;
        Et.annee_bac=reateetudiant_externeDTO.annee_bac;
        Et.lycee=reateetudiant_externeDTO.lycee;
        Et.delegation=Et.delegation;
        Et. academie=reateetudiant_externeDTO.academie;
        Et. picture=Et. picture;
        Et.email=reateetudiant_externeDTO.email;
        Et.nivaeu=reateetudiant_externeDTO.nivaeu;
        Et.type_deplome=reateetudiant_externeDTO.type_deplome;
        Et.villeEtablissement=reateetudiant_externeDTO.villeEtablissement;
        Et.etablissement=reateetudiant_externeDTO.etablissement;
    
       
        let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere:reateetudiant_externeDTO.id_filiere,
          });
          Et.filiere = filiere;
          
      
        try {
            await this.etudiant_externeRepository.insert(Et);
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
    
        const etudiant_externe = await this.etudiant_externeRepository.findOne({
          email,
          massar,
        });
    
        if (etudiant_externe) {
          if (await etudiant_externe.validatePassword(password)) {
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
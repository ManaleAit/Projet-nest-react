import {
    Injectable,
    ConflictException,
    InternalServerErrorException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { etudiant_ci } from './etudiant_ci.entity';
  import { etudiant_ciRepository } from './etudiant_ci.repository';
  import { InjectRepository } from '@nestjs/typeorm';
  import { CreateEtudiant_ciDTO } from './dto/createEtudiantDTO';
  import { Filiere } from 'src/filieres/filiere.entity';
  import { FiliereRepository } from 'src/filieres/filiere.repository';
  import { AuthDTO } from './dto/AuthDTO';
  import { JwtService } from '@nestjs/jwt';
  import * as bcrypt from 'bcrypt';
  import { JwtPayload } from 'src/etudiant_ci/jwt-payload.interface';
@Injectable()
export class Etudiant_ciService {

    constructor(
        @InjectRepository(etudiant_ciRepository)
        private etudiant_ciRepository: etudiant_ciRepository,
        private filiereRepository: FiliereRepository,
        private jwtService: JwtService,
      ) {}
    
      async getAllEtudiants(): Promise<etudiant_ci[]> {
        return await this.etudiant_ciRepository.find();
      }
    
      async createEtudiant_ci(reateEtudiant_ciDTO: CreateEtudiant_ciDTO): Promise<void> {
        // generate salt
        const salt = await  bcrypt.genSalt();
       
        
        
        // create new etudiant
        var Et = this.etudiant_ciRepository.create();
        Et.massar=reateEtudiant_ciDTO.massar;
        Et.cin=reateEtudiant_ciDTO.cin;
        Et.validated=reateEtudiant_ciDTO.validated;
        Et.lastname_ar=reateEtudiant_ciDTO.lastname_ar;
        Et.lastname_fr=reateEtudiant_ciDTO.lastname_fr;
        Et.firstname_ar=reateEtudiant_ciDTO.firstname_ar;
        Et.firstname_fr=reateEtudiant_ciDTO.firstname_fr;
        Et.note=reateEtudiant_ciDTO.note;
        Et.pass_salt=salt;
        
        Et.password = await this.hashPassword(reateEtudiant_ciDTO.password, salt);
       
        Et.natio=reateEtudiant_ciDTO.natio;
        Et.address=reateEtudiant_ciDTO.address;
        Et.phone=reateEtudiant_ciDTO.phone;
        Et.father_job=reateEtudiant_ciDTO.father_job;
        Et.father_name=reateEtudiant_ciDTO.father_name;
        Et.mother_name=reateEtudiant_ciDTO.mother_name;
        Et.mother_job=reateEtudiant_ciDTO.mother_job;
        Et.parents_address=reateEtudiant_ciDTO.parents_address;
        Et.parents_phone=reateEtudiant_ciDTO.parents_phone;
        Et.annee=reateEtudiant_ciDTO.annee;
        Et.type_bac=reateEtudiant_ciDTO.type_bac;
        Et.mention_bac=reateEtudiant_ciDTO.mention_bac;
        Et.annee_bac=reateEtudiant_ciDTO.annee_bac;
        Et.lycee=reateEtudiant_ciDTO.lycee;
        Et.delegation=Et.delegation;
        Et. academie=reateEtudiant_ciDTO.academie;
        Et. picture=Et. picture;
        Et.email=reateEtudiant_ciDTO.email;
        Et.nivaeu=reateEtudiant_ciDTO.nivaeu;
    
       
        let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere:reateEtudiant_ciDTO.id_filiere,
          });
          Et.filiere = filiere;
          
      
        try {
            await this.etudiant_ciRepository.insert(Et);
        } catch (error) {
          if (error.code === 'ER_DUP_ENTRY') {
            throw new ConflictException('Code Massar , CIN or Email Already Exist');
          }else {
            throw new InternalServerErrorException();
          }
        }
      }
    
  // signin sans token

  async signIn2(authDTO: AuthDTO){
    const { massar, email, password } = authDTO;

    const etudiant = await this.etudiant_ciRepository.findOne({
      massar,
      password,
    });
    if(etudiant!=null){

      return true;
    }

    return  false;
  }


      async getOne(massar:string): Promise<etudiant_ci> {
        return await this.etudiant_ciRepository.findOne(massar);
      }



      async signIn(authDTO: AuthDTO): Promise<{ accessToken: string }> {
        const { massar, email, password } = authDTO;
    
        const etudiant_ci = await this.etudiant_ciRepository.findOne({
          email,
          massar,
        });
    
        if (etudiant_ci) {
          if (await etudiant_ci.validatePassword(password)) {
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
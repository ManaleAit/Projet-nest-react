import {
    Injectable,
    ConflictException,
    InternalServerErrorException,
    NotFoundException 
  } from '@nestjs/common';
  import { etudiant } from './etudiant.entity';
  import { etudiantRepository } from './etudiant.repository';
  import { InjectRepository } from '@nestjs/typeorm';
  import { CreateEtudiantDTO } from './dto/createEtudiantDTO';
  import { FiliereRepository } from 'src/filieres/filiere.repository';
  import { Filiere } from 'src/filieres/filiere.entity';

  
  @Injectable()
  export class etudiantsService {
 
    constructor(
      @InjectRepository(etudiantRepository)
      private etudiantRepository: etudiantRepository,
      private filiereRepository: FiliereRepository,
     
    ) {}
  
    async getAllEtudiants(): Promise<etudiant[]> {
      return await this.etudiantRepository.find();
    }
  


    async getByMassar(massar:string): Promise<etudiant> {
      const found= await this.etudiantRepository.findOne(massar);

      if(!found){

        throw new NotFoundException('this etudiant  not found !! ')
      }
      return found;
  }

    async createEtudiant(createEtDTO: CreateEtudiantDTO): Promise<void> {
  
     
      
      
      // create new etudiant
      var Et = this.etudiantRepository.create();
      Et.massar=createEtDTO.massar;
      Et.cin=createEtDTO.cin;
      Et.validated=createEtDTO.validated;
      Et.lastname_ar=createEtDTO.lastname_ar;
      Et.lastname_fr=createEtDTO.lastname_fr;
      Et.firstname_ar=createEtDTO.firstname_ar;
      Et.firstname_fr=createEtDTO.firstname_fr;
      Et.note=createEtDTO.note;


     // l'attribue pass_salt
     
     Et.pass_salt= Et.pass_salt;
     
     Et.niveau=createEtDTO.niveau;
     Et.status=createEtDTO.status;
     Et.Type_diplome=createEtDTO.Type_diplome;
     
      Et.natio=createEtDTO.natio;
      Et.address=createEtDTO.address;
      Et.phone=createEtDTO.phone;
      Et.father_job=createEtDTO.father_job;
      Et.father_name=createEtDTO.father_name;
      Et.mother_name=createEtDTO.mother_name;
      Et.mother_job=createEtDTO.mother_job;
      Et.parents_address=createEtDTO.parents_address;
      Et.parents_phone=createEtDTO.parents_phone;
      Et.annee=createEtDTO.annee;
      Et.type_bac=createEtDTO.type_bac;
      Et.mention_bac=createEtDTO.mention_bac;
      Et.annee_bac=createEtDTO.annee_bac;
      Et.lycee=createEtDTO.lycee;
      Et.delegation=Et.delegation;
      Et. academie=createEtDTO.academie;
      Et. picture=Et. picture;
      Et.email=createEtDTO.email;
  
      // Get the filiere object from the id
      let filiere: Filiere = await this.filiereRepository.findOne({
       id_filiere: createEtDTO.id_filiere,
      });
      Et.filiere = filiere;
    
      try {
          await this.etudiantRepository.insert(Et);
      } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
          throw new ConflictException('Code Massar , CIN or Email Already Exist');
        }else {
          throw new InternalServerErrorException();
        }
      }
    }
  
         



  }
  
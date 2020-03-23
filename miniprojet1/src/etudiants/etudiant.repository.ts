import { Repository, EntityRepository } from "typeorm";
import { etudiant } from "./etudiant.entity";


@EntityRepository( etudiant)
export class etudiantRepository extends Repository< etudiant>{
   
}
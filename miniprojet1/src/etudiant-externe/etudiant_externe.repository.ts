import { Repository, EntityRepository } from "typeorm";
import { etudiant_externe } from "./etudiant_externe.entity";



@EntityRepository(etudiant_externe)
export class etudiant_externeRepository extends Repository<etudiant_externe>{
}
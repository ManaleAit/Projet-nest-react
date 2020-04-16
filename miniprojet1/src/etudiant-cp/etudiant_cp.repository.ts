import { Repository, EntityRepository } from "typeorm";
import { etudiant_cp } from "./etudiant_cp.entity";



@EntityRepository(etudiant_cp)
export class etudiant_cpRepository extends Repository<etudiant_cp>{
}




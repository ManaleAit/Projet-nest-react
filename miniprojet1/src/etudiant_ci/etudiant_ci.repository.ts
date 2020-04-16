import { Repository, EntityRepository } from "typeorm";
import { etudiant_ci } from "./etudiant_ci.entity";



@EntityRepository(etudiant_ci)
export class etudiant_ciRepository extends Repository<etudiant_ci>{
}
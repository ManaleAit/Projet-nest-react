import { Repository, EntityRepository } from "typeorm";
import { etudiant_ci } from "./etudiant_ci.entity";
import { InjectRepository } from "@nestjs/typeorm";


@EntityRepository(etudiant_ci)
export class etudiant_ciRepository extends Repository<etudiant_ci>{
}
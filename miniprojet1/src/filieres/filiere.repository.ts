import { Repository, EntityRepository } from "typeorm";
import { Filiere } from "./filiere.entity";
import { InjectRepository } from "@nestjs/typeorm";


@EntityRepository(Filiere)
export class FiliereRepository extends Repository<Filiere>{
}
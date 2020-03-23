import { Repository, EntityRepository } from "typeorm";
import { Candidature } from "./candidature.entity";


@EntityRepository(Candidature)
export class CandidatureRepository extends Repository<Candidature>{
   
}
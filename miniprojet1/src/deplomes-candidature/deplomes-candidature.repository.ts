import { Repository, EntityRepository } from "typeorm";
import { DeplomesCandidature } from "./deplomes-candidature.entity";
import { InjectRepository } from "@nestjs/typeorm";


@EntityRepository(DeplomesCandidature)
export class DeplomesCandidatureRepository extends Repository<DeplomesCandidature>{

}
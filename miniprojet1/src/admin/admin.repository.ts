import { Admin } from './admin.entity';
import { Repository, EntityRepository } from "typeorm";


@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin>{
   
}
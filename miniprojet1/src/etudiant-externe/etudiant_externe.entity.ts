import { Entity,Column,ManyToOne} from "typeorm";
import {etudiant_ci} from "src/etudiant_ci/etudiant_ci.entity";



@Entity()
export class  etudiant_externe  extends etudiant_ci{
    

    @Column("varchar", { length: 100 })
    niveau_cp:string;

    @Column("varchar", { length: 100 })
    type_diplome:string;
   
}
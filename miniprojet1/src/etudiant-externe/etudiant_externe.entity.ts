import { Entity,Column,OneToMany} from "typeorm";
import {etudiant_ci} from "src/etudiant_ci/etudiant_ci.entity";



@Entity()
export class  etudiant_externe  extends etudiant_ci{
    
    @Column("varchar", { length: 50 })
    type_deplome:string;
    @Column("varchar", { length: 120 })
    etablissement:string;
    @Column("varchar", { length: 30 })
    villeEtablissement:string;








   
}
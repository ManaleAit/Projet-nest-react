import { Entity,Column } from "typeorm";
import {etudiant} from "src/etudiants/etudiant.entity";


@Entity()
export class  etudiant_cp  extends etudiant{
    

    @Column("varchar", { length: 100 })
    niveau_cp:string;

}
import { Entity,Column,  ManyToOne } from "typeorm";
import {etudiant} from "src/etudiants/etudiant.entity";
import { Filiere } from "src/filieres/filiere.entity";

@Entity()
export class  etudiant_ci  extends etudiant{
    

    @ManyToOne(type => Filiere, filiere => filiere.liste_etudiant_ci)
    filiere: Filiere;

}
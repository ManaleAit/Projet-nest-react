import { Entity, BaseEntity,JoinTable, ManyToMany, Column, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Candidature } from "src/candidatures/candidature.entity";
import {etudiant_ci} from "src/etudiant_ci/etudiant_ci.entity";
import {niveau_ci} from "src/niveau_ci/niveau_ci.entity";

@Entity()
export class Filiere extends BaseEntity{
    @PrimaryGeneratedColumn()
    id_filiere:number;

    @Column("varchar", { length: 30 })
    nom_filiere:string;

    @Column({type:"datetime"})
    created_at:Date;

    @Column({type:"datetime"})
    updated_at:Date;

    @OneToMany(type => Candidature, candidature => candidature.filiere)
    liste_candidature: Candidature[];

    @OneToMany(type =>etudiant_ci, etudiant_ci=> etudiant_ci.filiere)
    liste_etudiant_ci: etudiant_ci[];

    @ManyToMany(type => niveau_ci,niveau_ci=>niveau_ci.list_filieres)
    @JoinTable()
    liste_niveaux:niveau_ci[];
}
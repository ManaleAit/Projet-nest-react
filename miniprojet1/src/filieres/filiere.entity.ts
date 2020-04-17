import { Entity, BaseEntity,JoinTable, ManyToMany, Column, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Candidature } from "src/candidatures/candidature.entity";
import {etudiant} from "src/etudiants/etudiant.entity";


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

    @OneToMany(type =>etudiant, etudiant=> etudiant.filiere)
    liste_etudiant: etudiant[];

}
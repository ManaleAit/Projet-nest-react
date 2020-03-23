import { Entity, BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Candidature } from "src/candidatures/candidature.entity";
  
@Entity()
export class DeplomesCandidature extends BaseEntity{
    @PrimaryGeneratedColumn()
    id_deplome:number;

    @Column("varchar", { length: 10 })
    type_deplome:string;

    @Column("varchar", { length: 120 })
    etablissement:string;

    @Column("varchar", { length: 120 })
    deplome_scan:string;

    @Column({type: "simple-json"})
    notes: {semester: string;note: number;};

    @Column({type:"bool"})
    redoublement:string;

    @Column("varchar", { length: 30 })
    villeEtablissement:string;

    @Column({type:'int',width:4})
    anneeDiplome:string;

    @Column({type:"datetime"})
    created_at:Date;

    @Column({type:"datetime"})
    updated_at:Date;

    @ManyToOne(type => Candidature, candidature => candidature.liste_deplomes)
    candidature: Candidature;
}
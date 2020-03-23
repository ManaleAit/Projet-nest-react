import { Entity, BaseEntity, PrimaryColumn, Column, ManyToOne, OneToMany, Unique } from "typeorm";
import { Filiere } from "src/filieres/filiere.entity";
import { DeplomesCandidature } from "src/deplomes-candidature/deplomes-candidature.entity";
import * as bcrypt from 'bcrypt';


enum CANDIDATURE_STATU {
    Active = 1,
    Desactive = 2
}

@Entity()
export class Candidature extends BaseEntity{
    @PrimaryColumn("varchar", { length:10 })
    massar:string;

    @Column({type: "varchar", length: 10, unique: true})
    cin:string;

    @Column("varchar", { length: 30 })
    nom:string;

    @Column("varchar", { length: 30 })
    prenom:string;

    @Column({type: "varchar", length: 40, unique: true})
    email:string;

    @Column("varchar", { length: 100 })
    password:string;

    @Column("varchar", { length: 50 })
    pass_salt:string;

    @Column({type:'int',width:1,default:CANDIDATURE_STATU.Desactive})
    status:CANDIDATURE_STATU;

    @Column("varchar", { length: 50 })
    photo:string;

    @Column({type:'int',width:1})
    niveau:number;

    @Column("varchar", { length: 255 })
    adresse:string;

    @Column({type:"date"})
    date_naissance:Date;

    @Column({type:"bool",width:1,default:0})
    depot_dossier:boolean;

    @Column({type:"bool",width:1,default:0})
    presence:boolean;

    @Column({type:"datetime"})
    verified_at:Date;

    @Column({type:"datetime"})
    created_at:Date;

    @Column({type:"datetime"})
    updated_at:Date;

    @ManyToOne(type => Filiere, filiere => filiere.liste_candidature)
    filiere: Filiere;

   @OneToMany(type => DeplomesCandidature, dep => dep.candidature)
    liste_deplomes: DeplomesCandidature[];




    async validatePassword(password:string):Promise<boolean>{
        const hash = await bcrypt.hash(password,this.pass_salt);        
        return (hash===this.password);
    }
}
import { Entity, BaseEntity, PrimaryColumn,ManyToOne, Column,Double } from "typeorm";

import { Filiere } from "src/filieres/filiere.entity";

@Entity()
export class etudiant extends BaseEntity{
    
    @PrimaryColumn("varchar",{length:30})
    massar:string;

    @Column("varchar", { length: 30 })
    password:string;

    @Column("varchar", { length: 30 })
    email:string;

    @Column("double")
    note:Double;

    @Column("varchar", { length: 30 })
    validated:string;

    @Column("varchar", { length: 30 })
    cin:string;

    @Column("varchar", { length: 30 })
    lastname_fr:string;

    @Column("varchar", { length: 30 })
    lastname_ar:string;

    @Column("varchar", { length: 30 })
    firstname_fr:string;

    @Column("varchar", { length: 30 })
    firstname_ar:string;

    @Column("varchar", { length: 30 })
    natio:string;

    @Column("varchar", { length: 30 })
    address:string;

    @Column("varchar", { length: 20 })
    phone:string;

    @Column("varchar", { length: 30 })
    father_name:string;

    @Column("varchar", { length: 30 })
    father_job:string;

    @Column("varchar", { length: 40 })
    mother_name:string;

    @Column("varchar", { length: 50 })
    mother_job:string;

    @Column("varchar", { length: 10 })
    parents_address:string;

    @Column("varchar", { length: 30 })
    parents_phone:string;

    @Column("varchar", { length: 30 })
    annee:string;

    @Column("varchar", { length: 100})
    type_bac:string;

    @Column("varchar", { length: 1100 })
    mention_bac:string;

    @Column("varchar", { length: 100})
    annee_bac:string;

    @Column("varchar", { length: 1100 })
    lycee:string;

    @Column("varchar", { length: 100})
    delegation:string;

    @Column("varchar", { length:100 })
    academie:string;

    @Column("varchar", { length: 100 })
    picture:string;


    // att  pass_salt
    @Column("varchar", { length: 50 })
    pass_salt:string;

    
    @Column("varchar", { length: 100 })
    niveau:string;

    @ManyToOne(type => Filiere, filiere => filiere.liste_etudiant)
    filiere: Filiere;


        
    @Column("varchar", { length: 100 })
    status:string;

    @Column("varchar", { length: 100 })
    Type_diplome:string;



 
}
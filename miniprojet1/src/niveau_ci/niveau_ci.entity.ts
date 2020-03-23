import { Entity, BaseEntity, JoinTable,ManyToMany, Column, PrimaryGeneratedColumn} from "typeorm";
import { Filiere } from "src/filieres/filiere.entity";


@Entity()
export class niveau_ci extends BaseEntity{
    @PrimaryGeneratedColumn()
    id_niv: number;

    @Column("varchar", { length: 30 })
    nom_niv: string;


    @ManyToMany(type => Filiere,filiere => filiere.liste_niveaux)
    list_filieres:Filiere[];
}
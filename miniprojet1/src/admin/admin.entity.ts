import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";


@Entity()
export class Admin extends BaseEntity{
    @PrimaryGeneratedColumn()
    id_admin:number;

    @Column({type: "varchar", length: 30, unique: true})
    username:string;

    @Column("varchar", { length: 60 })
    password:string;

    @Column("varchar", { length: 40 })
    pass_salt:string;


    async validatePassword(password:string):Promise<boolean>{
        const hash = await bcrypt.hash(password,this.pass_salt);        
        return (hash===this.password);
    }
}
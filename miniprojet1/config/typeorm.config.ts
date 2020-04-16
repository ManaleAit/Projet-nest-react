
import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const config:TypeOrmModuleOptions =({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"",
    database:"ensas_con3",
    entities:[__dirname+'/../**/*.entity.js'],
    synchronize:true
})
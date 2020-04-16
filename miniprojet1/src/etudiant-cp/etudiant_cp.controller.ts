
import {Etudiant_cpService} from './etudiant_cp.service';
import {etudiant_cp} from './etudiant_cp.entity';


import { Controller,Param, Get, Post, Body, UsePipes, ValidationPipe, Req } from '@nestjs/common';

import { CreateEtudiant_cpDTO } from './dto/CreateEtudiantDTO';
import { AuthDTO } from './dto/AuthDTO';

@Controller('etudiant_cp')
export class Etudiant_cpController {

        constructor(private etudiant_cpService:Etudiant_cpService){ }
    
        @Get("")
        async getetudiants():Promise<etudiant_cp[]>{
            return await this.etudiant_cpService.getAllEtudiants();
        }
    
        @Post("/add")
        @UsePipes(ValidationPipe) 
        async createEtudiant(@Body(ValidationPipe) createEtDTO: CreateEtudiant_cpDTO):Promise<void>{
            return this.etudiant_cpService.createEtudiant_ci(createEtDTO);
        }
    
        @Post("/signin")
        async signIn(@Body(ValidationPipe) authDTO: AuthDTO):Promise<{accessToken:string}>{
            return this.etudiant_cpService.signIn(authDTO);
        }
  
        @Get(':massar')
        async  getTudo(@Param('massar') ma:string):Promise<etudiant_cp>{
            return  await this.etudiant_cpService.getOne(ma);
        }
    
}
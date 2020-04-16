
import {Etudiant_ciService} from './etudiant_ci.service';
import {etudiant_ci} from './etudiant_ci.entity';


import { Controller, Param,Get, Post, Body, UsePipes, ValidationPipe, Req } from '@nestjs/common';

import { CreateEtudiant_ciDTO } from './dto/CreateEtudiantDTO';
import { AuthDTO } from './dto/AuthDTO';

@Controller('etudiant_ci')
export class Etudiant_ciController {

        constructor(private etudiantsService:Etudiant_ciService){ }
    
        @Get("")
        async getetudiants():Promise<etudiant_ci[]>{
            return await this.etudiantsService.getAllEtudiants();
        }
    
        @Post("/add")
        @UsePipes(ValidationPipe) 
        async createEtudiant(@Body(ValidationPipe) createEtDTO: CreateEtudiant_ciDTO):Promise<void>{
            return this.etudiantsService.createEtudiant_ci(createEtDTO);
        }
    
        @Post("/signin")
        async signIn(@Body(ValidationPipe) authDTO: AuthDTO):Promise<{accessToken:string}>{
            return this.etudiantsService.signIn(authDTO);
        }
  

        @Get(':massar')
        async  getTudo(@Param('massar') ma:string):Promise<etudiant_ci>{
            return  await this.etudiantsService.getOne(ma);
        }
    
    
    
}
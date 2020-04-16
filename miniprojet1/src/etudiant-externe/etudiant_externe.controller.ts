
import {etudiant_externeService} from './etudiant_externe.service';
import {etudiant_externe} from './etudiant_externe.entity';


import { Controller, Get, Param,Post, Body, UsePipes, ValidationPipe, Req } from '@nestjs/common';

import { CreateEtudiant_exDTO } from './dto/CreateEtudiantDTO';
import { AuthDTO } from './dto/AuthDTO';

@Controller('etudiant_externe')
export class etudiant_externeController {

        constructor(private etudiantsService:etudiant_externeService){ }
    
        @Get("")
        async getetudiants():Promise<etudiant_externe[]>{
            return await this.etudiantsService.getAllEtudiants();
        }
    
        @Post("/add")
        @UsePipes(ValidationPipe) 
        async createEtudiant(@Body(ValidationPipe) createEtDTO: CreateEtudiant_exDTO):Promise<void>{
            return this.etudiantsService.createetudiant_externe(createEtDTO);
        }
    
        @Post("/signin")
        async signIn(@Body(ValidationPipe) authDTO: AuthDTO):Promise<{accessToken:string}>{
            return this.etudiantsService.signIn(authDTO);
        }
  
  
      
        @Get(':massar')
        async  getTudo(@Param('massar') ma:string):Promise<etudiant_externe>{
            return  await this.etudiantsService. getOne(ma);
        }
    
    
}
import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Req } from '@nestjs/common';
import { etudiantsService  } from './etudiant.service';
import { CreateEtudiantDTO } from './dto/CreateEtudiantDTO';
import { AuthDTO } from './dto/AuthDTO';
import { etudiant } from './etudiant.entity';

@Controller('etudiants')
export class EtudiantsController {
    constructor(private etudiantsService:etudiantsService){ }

    @Get("")
    async getetudiants():Promise<etudiant[]>{
        return await this.etudiantsService.getAllEtudiants();
    }

    @Post("/add")
    @UsePipes(ValidationPipe) 
    async createEtudiant(@Body(ValidationPipe) createEtDTO: CreateEtudiantDTO):Promise<void>{
        return this.etudiantsService.createEtudiant(createEtDTO);
    }

    @Post("/signin")
    async signIn(@Body(ValidationPipe) authDTO: AuthDTO):Promise<{accessToken:string}>{
        return this.etudiantsService.signIn(authDTO);
    }
}


import { Controller, Get, Post, Body, UsePipes, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { CandidaturesService } from './candidatures.service';
import { Candidature } from './candidature.entity';
import { CreateCandidatureDTO } from './dto/createCandidatureDTO';
import { AuthDTO } from './dto/AuthDTO';
import { AuthGuard } from '@nestjs/passport';

@Controller('candidatures')
export class CandidaturesController {
    constructor(private candidatureService:CandidaturesService){ }

    @Get("")
    @UseGuards(AuthGuard("jwt-admin"))
    async getCandidatures(@Req() req):Promise<Candidature[]>{
        return await this.candidatureService.getAllCandidatures()
    }

    @Post("/add")
    @UsePipes(ValidationPipe) 
    async createCandidature(@Body(ValidationPipe) createCandDTO: CreateCandidatureDTO):Promise<void>{
        return this.candidatureService.createCandidature(createCandDTO);
    }

    @Post("/signin")
    async signIn(@Body(ValidationPipe) authDTO: AuthDTO):Promise<{accessToken:string}>{
        return this.candidatureService.signIn(authDTO);
    }
}

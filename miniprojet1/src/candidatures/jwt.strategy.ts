import { JwtConstants } from './../../config/jwt.config';
import { JwtPayload } from './jwt-payload.interface';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy } from "passport-jwt";
import { InjectRepository } from '@nestjs/typeorm';
import { CandidatureRepository } from './candidature.repository';
import { Candidature } from './candidature.entity';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,"jwt-user"){
    constructor(
        @InjectRepository(CandidatureRepository)
        private candRepo:CandidatureRepository,
    ){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:JwtConstants.secret
        })
    }

    async validate(payload:JwtPayload) :Promise<Candidature>{
        console.log("Valdiate Jwt user called");

        const {massar,email} = payload;
        const candidature = await this.candRepo.findOne({massar,email});

        if(!candidature){
            throw new UnauthorizedException();
        }

        return candidature;
    }
}
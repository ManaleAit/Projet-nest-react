import { JwtConstants } from './../../config/jwt.config';
import { JwtPayload } from './jwt-payload.interface';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy } from "passport-jwt";
import { InjectRepository } from '@nestjs/typeorm';
import { etudiant_externeRepository } from './etudiant_externe.repository';
import { etudiant_externe} from './etudiant_externe.entity';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,"jwt-user"){
    constructor(
        @InjectRepository(etudiant_externeRepository)
        private etRepo:etudiant_externeRepository,
    ){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:JwtConstants.secret
        })
    }

    async validate(payload:JwtPayload) :Promise<etudiant_externe>{
        console.log("Valdiate Jwt user called");

        const {massar,email} = payload;
        const etudiant_ext = await this.etRepo.findOne({massar,email});

        if(!etudiant_ext){
            throw new UnauthorizedException();
        }

        return etudiant_ext ;
    }
}
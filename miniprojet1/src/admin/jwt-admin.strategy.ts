import { AdminRepository } from './admin.repository';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from '@nestjs/typeorm';
import { JwtConstants } from 'config/jwt.config';
import { JwtAdminPayload } from './jwt-admin-payload.interface';
import { Admin } from './admin.entity';
import { ExtractJwt,Strategy } from "passport-jwt";

@Injectable()
export class JwtAdminStrategy extends PassportStrategy(Strategy,"jwt-admin"){
    constructor(
        @InjectRepository(AdminRepository)
        private adminRepo:AdminRepository,
    ){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:JwtConstants.secret
        });

    }

    async validate(payload:JwtAdminPayload) :Promise<Admin>{
        console.log("Valdiate Jwt Admin called");   
        
        const {id_admin,username} = payload;
        const admin = await this.adminRepo.findOne({id_admin, username});

        if(!admin){
            throw new UnauthorizedException();
        }

        return admin;
    }
}
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRepository } from './admin.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from 'config/jwt.config';
import { JwtAdminStrategy } from './jwt-admin.strategy';

@Module({
    imports:[
        PassportModule.register({ defaultStrategy: 'jwt-admin' }),
            JwtModule.register({
            secret: JwtConstants.secret,
            signOptions: {
                expiresIn: 3600,
            },
        }),
        TypeOrmModule.forFeature([AdminRepository])
    ],
    providers:[AdminService,JwtAdminStrategy],
    controllers:[AdminController],
    exports: [JwtAdminStrategy, PassportModule],
})
export class AdminModule {}

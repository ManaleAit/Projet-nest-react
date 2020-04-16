

import { Module } from '@nestjs/common';
import { Etudiant_ciService  } from './etudiant_ci.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { etudiant_ciRepository } from './etudiant_ci.repository';
import { FiliereRepository } from 'src/filieres/filiere.repository';
import { Etudiant_ciController } from './etudiant_ci.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from 'config/jwt.config';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt-admin' }),
    JwtModule.register({
      secret: JwtConstants.secret,
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([ etudiant_ciRepository, FiliereRepository]),
  ],
  providers: [Etudiant_ciService],
  controllers: [Etudiant_ciController]
})
export class Etudiant_ciModule {}




import { Module } from '@nestjs/common';
import { etudiant_externeService  } from './etudiant_externe.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { etudiant_externeRepository } from './etudiant_externe.repository';
import { FiliereRepository } from 'src/filieres/filiere.repository';
import { etudiant_externeController } from './etudiant_externe.controller';
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
    TypeOrmModule.forFeature([ etudiant_externeRepository, FiliereRepository]),
  ],
  providers: [etudiant_externeService],
  controllers: [etudiant_externeController]
})
export class EtudiantExterneModule  {}


import { Module } from '@nestjs/common';
import { Etudiant_cpService  } from './etudiant_cp.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { etudiant_cpRepository } from './etudiant_cp.repository';
import { FiliereRepository } from 'src/filieres/filiere.repository';
import { Etudiant_cpController } from './etudiant_cp.controller';
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
    TypeOrmModule.forFeature([ etudiant_cpRepository, FiliereRepository]),
  ],
  providers: [Etudiant_cpService],
  controllers: [Etudiant_cpController]
})
export class Etudiant_cpModule {}


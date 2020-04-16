import { Module } from '@nestjs/common';
import { CandidaturesModule } from './candidatures/candidatures.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'config/typeorm.config';
import { FilieresModule } from './filieres/filieres.module';
import { DeplomesCandidatureModule } from './deplomes-candidature/deplomes-candidature.module';
import { AdminModule } from './admin/admin.module';

import { EtudiantExterneModule } from './etudiant-externe/etudiant-externe.module';
import { EtudiantModule } from './etudiants/etudiant.module';
import { Etudiant_cpModule  } from './etudiant-cp/etudiant-cp.module';
import { Etudiant_ciModule } from './etudiant_ci/Etudiant_ci.Module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    CandidaturesModule, 
    FilieresModule, 
    EtudiantModule,
    AdminModule,
    DeplomesCandidatureModule,
    EtudiantExterneModule,
    Etudiant_cpModule ,
    Etudiant_ciModule,
 
    ],
  controllers: [],
  providers: []
})
export class AppModule {}

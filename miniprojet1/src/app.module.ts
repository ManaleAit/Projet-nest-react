import { Module } from '@nestjs/common';
import { CandidaturesModule } from './candidatures/candidatures.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'config/typeorm.config';
import { FilieresModule } from './filieres/filieres.module';
import { DeplomesCandidatureModule } from './deplomes-candidature/deplomes-candidature.module';
import { AdminModule } from './admin/admin.module';

import { EtudiantExterneModule } from './etudiant-externe/etudiant-externe.module';
import { EtudiantModule } from './etudiants/etudiant.module';
import { EtudiantCpModule } from './etudiant-cp/etudiant-cp.module';
import { EtudiantCiModule } from './etudiant_ci/etudiant-ci.module';
import { NiveauCiModule } from './niveau_ci/niveau_ci.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    CandidaturesModule, 
    FilieresModule, 
    EtudiantModule,
    AdminModule,
    DeplomesCandidatureModule,
    EtudiantExterneModule,
    EtudiantCpModule,
    EtudiantCpModule,
    EtudiantCiModule,
    NiveauCiModule,
    ],
  controllers: [],
  providers: []
})
export class AppModule {}

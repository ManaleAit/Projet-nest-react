import { Module } from '@nestjs/common';
import { CandidaturesModule } from './candidatures/candidatures.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'config/typeorm.config';
import { FilieresModule } from './filieres/filieres.module';
import { DeplomesCandidatureModule } from './deplomes-candidature/deplomes-candidature.module';
import { AdminModule } from './admin/admin.module';

import { EtudiantModule } from './etudiants/etudiant.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    CandidaturesModule, 
    FilieresModule, 
    EtudiantModule,
    AdminModule,
    DeplomesCandidatureModule,
 

 
    ],
  controllers: [],
  providers: []
})
export class AppModule {}

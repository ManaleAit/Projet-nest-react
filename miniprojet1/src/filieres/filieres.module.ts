import { Module } from '@nestjs/common';
import { FilieresService } from './filieres.service';
import { FilieresController } from './filieres.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FiliereRepository } from './filiere.repository';

@Module({
    imports:[TypeOrmModule.forFeature([FiliereRepository])],
    providers:[FilieresService],
    controllers:[FilieresController]
})
export class FilieresModule {}

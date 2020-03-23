import { Module } from '@nestjs/common';
import { DeplomesCandidatureController } from './deplomes-candidature.controller';
import { DeplomesCandidatureService } from './deplomes-candidature.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeplomesCandidatureRepository } from './deplomes-candidature.repository';

@Module({
    imports:[TypeOrmModule.forFeature([DeplomesCandidatureRepository])],
    providers: [DeplomesCandidatureService],
    controllers:[DeplomesCandidatureController]
})
export class DeplomesCandidatureModule {}

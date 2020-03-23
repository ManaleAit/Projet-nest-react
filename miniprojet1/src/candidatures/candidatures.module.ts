
import { JwtConstants } from './../../config/jwt.config';
import { JwtStrategy } from './jwt.strategy';
import { Module } from '@nestjs/common';
import { CandidaturesController } from './candidatures.controller';
import { CandidaturesService } from './candidatures.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidatureRepository } from './candidature.repository';
import { FiliereRepository } from 'src/filieres/filiere.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtAdminStrategy } from 'src/admin/jwt-admin.strategy';
import { AdminRepository } from 'src/admin/admin.repository';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt-admin' }),
    JwtModule.register({
      secret: JwtConstants.secret,
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([CandidatureRepository, FiliereRepository,AdminRepository]),
  ],
  providers: [CandidaturesService, JwtStrategy,JwtAdminStrategy],
  controllers: [CandidaturesController],
  exports: [JwtStrategy,JwtAdminStrategy, PassportModule],
})
export class CandidaturesModule {}

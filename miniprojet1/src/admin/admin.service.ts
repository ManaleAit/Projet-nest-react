import { AdminAuthDTO } from './dto/AdminAuthDTO';
import { AdminRepository } from './admin.repository';
import { Injectable, UnauthorizedException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { JwtAdminPayload } from './jwt-admin-payload.interface';
import * as bcrypt from "bcrypt";

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminRepository)
    private adminRepo: AdminRepository,
    private jwtService: JwtService,
  ) {}

  async signIn(adminAuthDTO: AdminAuthDTO): Promise<{ accessToken: string }> {
    const { username, password } = adminAuthDTO;

    const admin = await this.adminRepo.findOne({ username });

    if (admin) {
      if (await admin.validatePassword(password)) {
        const id_admin = admin.id_admin;
        const payload: JwtAdminPayload = { username, id_admin };

        const accessToken = await this.jwtService.sign(payload);

        return { accessToken };
      } else {
        throw new UnauthorizedException('Invalid Admin Credentials');
      }
    } else {
      throw new UnauthorizedException('Invalid Admin Credentials');
    }
  }

  async signUp(adminAuthDTO: AdminAuthDTO): Promise<void> {
    // generate salt
    const salt = await bcrypt.genSalt();

    // create new admin
    var admin = this.adminRepo.create();
    admin.username = adminAuthDTO.username;
    admin.pass_salt = salt;
    admin.password = await this.hashPassword(adminAuthDTO.password, salt);

    try {
      await this.adminRepo.insert(admin);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Username already exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async hashPassword(password: string, salt: string): Promise<string> {
    return await bcrypt.hash(password, salt);
  }
}

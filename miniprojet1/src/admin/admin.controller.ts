
import { Controller,Post, UsePipes, ValidationPipe, Body, Get } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminAuthDTO } from './dto/AdminAuthDTO';

@Controller('admins')
export class AdminController {
    constructor(private adminService:AdminService){ }

    @Post("/signin")
    @UsePipes(ValidationPipe) 
    async SignIn(@Body(ValidationPipe) adminAuthDTO: AdminAuthDTO):Promise<{accessToken:string}>{
        return await this.adminService.signIn(adminAuthDTO)
    }

    @Post("/signup")
    @UsePipes(ValidationPipe) 
    async SignUp(@Body(ValidationPipe) adminAuthDTO: AdminAuthDTO):Promise<void>{
        return await this.adminService.signUp(adminAuthDTO);
    }

}

import {IsString, MinLength} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AdminAuthDTO{
    @IsString()
    @MinLength(5)
    @ApiProperty()
    username:string;
    
    @IsString()
    @MinLength(8)
    @ApiProperty()
    password:string;
}
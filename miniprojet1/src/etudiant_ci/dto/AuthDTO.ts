import {IsString, MinLength, MaxLength} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AuthDTO{
    @IsString()
   
    massar:string;

    @IsString()

    email:string;

    @IsString()

    password:string;
}
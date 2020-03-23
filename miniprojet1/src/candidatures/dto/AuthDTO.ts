import {IsString, MinLength, MaxLength} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AuthDTO{
    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    massar:string;

    @IsString()
    @MinLength(8)
    @ApiProperty()
    email:string;

    @IsString()
    @MinLength(8)
    @ApiProperty()
    password:string;
}
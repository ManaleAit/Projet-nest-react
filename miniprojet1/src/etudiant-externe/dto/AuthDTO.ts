import {IsString, MinLength, MaxLength} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AuthDTO{
 
   
    massar:string;

 

    email:string;

  

    password:string;
}
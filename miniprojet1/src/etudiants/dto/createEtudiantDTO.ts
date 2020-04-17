import { IsString, MinLength, MaxLength, IsNumber, IsDate } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Double } from "typeorm";
import { isNumber } from "util";

export class CreateEtudiantDTO{


    
    @IsString()
    parents_address:string;

    @IsString()
    parents_phone:string;

    @IsString()
    annee:string;

    @IsString()
    type_bac:string;

    @IsString()
    mention_bac:string;

    @IsString()
    mother_job:string;

    @IsString()
    annee_bac:string;

    @IsString()
    lycee:string;

    @IsString()
    delegation:string;

    @IsString()
    academie:string;

    @IsString()
    father_name:string;

    @IsString()
    father_job:string;

    @IsString()
    massar:string;

    @IsString()
    picture:string;

    @IsString()
    mother_name:string;

    @IsString()
    address:string;
    
    @IsString()
    phone:string;

    @IsString()
    validated:string;

    @IsString()
    natio:string;

    @IsString()
    cin:string;
    
   
    note:Double;
   

    @IsString()
    firstname_fr:string;

    @IsString()

    firstname_ar:string;

    @IsString()
 
    lastname_fr:string;

    @IsString()
  
    lastname_ar:string;

    @IsString()
  
    email:string;

    @IsString()

    password:string;

    @IsString()
    niveau:string;


    @IsString()
    status:string;

    @IsString()
    Type_diplome:string;


    id_filiere: number;
    

}
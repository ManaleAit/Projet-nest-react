import { IsString, MinLength, MaxLength, IsNumber, IsDate } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCandidatureDTO{
    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    massar:string;

    @IsString()
    @MinLength(4)
    @MaxLength(8)
    @ApiProperty()
    cin:string;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    @ApiProperty()
    nom:string;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    @ApiProperty()
    prenom:string;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    @ApiProperty()
    email:string;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    @ApiProperty()
    password:string;

    @IsString()
    @ApiProperty()
    photo:string;

    @IsNumber()
    @ApiProperty()
    niveau:number;

    @IsString()
    @MinLength(8)
    @ApiProperty()
    adresse:string;

    @IsDate()
    @ApiProperty()
    date_naissance:Date;

    @IsNumber()
    @ApiProperty()
    id_filiere: number;
}
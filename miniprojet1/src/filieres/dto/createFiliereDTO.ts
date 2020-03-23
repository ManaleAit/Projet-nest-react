import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class createFiliereDTO{
    @IsString()
    @MinLength(3)
    @ApiProperty()
    nom_filiere:string;
}
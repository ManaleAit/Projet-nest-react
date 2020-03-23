import { createParamDecorator } from "@nestjs/common";
import { etudiant } from "./etudiant.entity";


export const Getetudaint = createParamDecorator((data,req):etudiant=>{
        return req.user;
});
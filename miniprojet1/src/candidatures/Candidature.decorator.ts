import { createParamDecorator } from "@nestjs/common";
import { Candidature } from "./candidature.entity";


export const GetCandidature = createParamDecorator((data,req):Candidature=>{
        return req.user;
});
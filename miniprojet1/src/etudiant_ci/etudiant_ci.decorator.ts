import { createParamDecorator } from "@nestjs/common";
import { etudiant_ci} from "./etudiant_ci.entity";


export const Getetudiant_ci = createParamDecorator((data,req):etudiant_ci=>{
        return req.user;
});
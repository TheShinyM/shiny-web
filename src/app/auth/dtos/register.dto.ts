import { User } from "../services/user";
import { AuthDTO } from "./auth.dto";

export class RegisterDTO {
    public user: User;

    public auth: AuthDTO;

    public constructor(authRegister: Partial<RegisterDTO>) {
        Object.assign(this, authRegister);
    }
}

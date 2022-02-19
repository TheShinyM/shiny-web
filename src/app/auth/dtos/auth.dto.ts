import { UserRole } from "../services/user-role";

export class AuthDTO {
    public token: string;

    public name: string;

    public roles: UserRole;
}

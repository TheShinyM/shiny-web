import { UserRole } from "./user-role";

export class User {
    public id: number;

    public name: string;

    public password: string;

    public email: string;

    public roles: UserRole;

    public createdAt: Date;

    public updatedAt: Date;

    public constructor(user?: Partial<User>) {
        if (user) {
            Object.assign(this, user);
        }
    }

    public hasRole(role: UserRole): boolean {
        return this.roles && this.roles.includes(role);
    }

    public hasAdmin(): boolean {
        return this.roles === UserRole.ADMIN;
    }
}

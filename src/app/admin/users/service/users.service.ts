import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { User } from "src/app/auth/services/user";
import { EnvService } from "src/app/env/env.service";

@Injectable()
export class AdminUserService {
    private apiURL: string = this.env.url;

    public users: User[];

    constructor(private http: HttpClient, private readonly env: EnvService) {}

    public getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiURL + "/users").pipe(
            tap((users: User[]) => {
                this.users = users;
            })
        );
    }

    public getUser(userId: number): Observable<User> {
        if (this.users) {
            const searchedUser: User = this.users.find((user: User) => user.id === userId);
            if (searchedUser) {
                return of(searchedUser);
            }
        }
        return this.http.get<User>(this.apiURL + "/users/" + userId);
    }

    public saveUser(user: User): Observable<User> {
        return this.http.patch<User>(this.apiURL + "/users/" + user.id, user);
    }
}

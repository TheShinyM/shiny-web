import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { EnvService } from "src/app/env/env.service";
import { User } from "./user";

@Injectable({
    providedIn: "root"
})
export class UserSerivce {
    private user: User;

    protected endpoint: string = "admin/users";

    protected url: string = this.env.url;

    public constructor(private http: HttpClient, private readonly env: EnvService) {}

    public createModel(data: Partial<User>): User {
        return new User(data);
    }

    public getMe(): Observable<User> {
        if (this.user) {
            return of(this.user);
        }
        return this.http.get<User>(this.url + this.endpoint + "/me").pipe(
            map((res: User) => this.createModel(res)),
            tap((user: User) => (this.user = user))
        );
    }
}

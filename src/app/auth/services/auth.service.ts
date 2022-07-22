import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { EnvService } from "src/app/env/env.service";
import { AuthDTO } from "../dtos/auth.dto";
import { CredentialsDTO } from "../dtos/creadentials.dto";
import { RegisterDTO } from "../dtos/register.dto";
import { User } from "./user";
import { UserSerivce } from "./user.service";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    public user: User;

    public url: string = this.env.url;

    public constructor(
        private http: HttpClient,
        private jwtHelper: JwtHelperService,
        private userService: UserSerivce,
        private router: Router,
        private readonly env: EnvService
    ) {}

    public login(email: string, password: string): Observable<AuthDTO> {
        return this.http
            .post(this.url + "/login", {
                email: email,
                password: password
            } as CredentialsDTO)
            .pipe(
                tap((response: AuthDTO) => {
                    localStorage.setItem("jwt", response.token);
                    this.user.name = response.name;
                    this.user.roles = response.roles;
                })
            );
    }

    public register(email: string, name: string, password: string): Observable<RegisterDTO> {
        return this.http.post(this.url + "/register", { email, name, password }).pipe(
            tap((response: RegisterDTO) => {
                localStorage.setItem("jwt", response.auth.token);
            })
        );
    }

    public getAuthorizationToken(): string {
        return localStorage.getItem("jwt") || "";
    }

    public isAuhenticated(): boolean {
        const jwt: string = localStorage.getItem("jwt");
        try {
            return !this.jwtHelper.isTokenExpired(jwt);
        } catch (e) {
            return false;
        }
    }
    public logout(): void {
        localStorage.removeItem("jwt");
        this.router.navigateByUrl("");
    }

    public hasAdmin(): boolean {
        if (this.user) {
            return this.user.hasAdmin();
        }
        this.getMe();
        return false;
        // this.hasAdmin();
    }

    public getMe(): void {
        this.http.get<User>(this.env.url + "/getme").subscribe((res: User) => {
            this.user = new User(res);
        });
    }
}

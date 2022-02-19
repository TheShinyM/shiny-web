import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EnvService } from "../env/env.service";
import { Gamemode } from "../home/home-component/gamemodes/entitiys/gamemode.entity";

@Injectable({
    providedIn: "root"
})
export class WebServiceService {
    public apiUrl: string = this.env.url;

    constructor(private http: HttpClient, private readonly env: EnvService) {}

    public getGamemodes(): Observable<Gamemode[]> {
        return this.http.get<Gamemode[]>(this.apiUrl + "/gamemodes");
    }
}

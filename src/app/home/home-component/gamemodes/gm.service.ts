import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { EnvService } from "src/app/env/env.service";
import { GamemodeBack } from "./entitiys/gamemodeBack.entity";

@Injectable()
export class GamemodeService {
    public apiUrl: string = this.env.url;
    private gms: GamemodeBack[];

    constructor(private http: HttpClient, private readonly env: EnvService) {
        this.http.get<GamemodeBack[]>(this.apiUrl + "/gamemodes").subscribe((res: GamemodeBack[]) => {
            this.gms = res;
        });
    }

    public getGamemode(id: number): Observable<GamemodeBack> {
        if (this.gms !== undefined) {
            return of(this.gms.find((gm: GamemodeBack) => gm.id === id));
        }
        return this.http.get<GamemodeBack>(this.apiUrl + "/gamemodes/" + id);
    }

    public getGamemodes(): Observable<GamemodeBack[]> {
        if (this.gms) {
            return of(this.gms);
        }
        return this.http
            .get<GamemodeBack[]>(this.apiUrl + "/gamemodes")
            .pipe(tap((res: GamemodeBack[]) => (this.gms = res)));
    }
}

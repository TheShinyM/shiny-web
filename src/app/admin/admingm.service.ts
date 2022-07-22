import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { EnvService } from "../env/env.service";
import { AdminGamemodeEntity } from "./entity/admin-gamemode.entity";
@Injectable()
export class AdminGeneralService {
    private apiURL: string = this.env.url;

    public gms: AdminGamemodeEntity[] = [];

    constructor(private http: HttpClient, private readonly env: EnvService) {
        this.http
            .get<AdminGamemodeEntity[]>(this.apiURL + "/admin/gamemodes")
            .subscribe((res: AdminGamemodeEntity[]) => {
                this.gms = res;
            });
    }

    public getGamemodes(): Observable<AdminGamemodeEntity[]> {
        return this.http
            .get<AdminGamemodeEntity[]>(this.apiURL + "/admin/gamemodes")
            .pipe(tap((res: AdminGamemodeEntity[]) => (this.gms = res)));
    }

    public getGamemode(id: number): AdminGamemodeEntity {
        return this.gms.find((gm: AdminGamemodeEntity) => gm.id === id);
    }

    public getGamemodeBack(id: number): Observable<AdminGamemodeEntity> {
        return this.http.get<AdminGamemodeEntity>(this.apiURL + "/admin/gamemodes/" + id);
    }

    public postGamemode(body: AdminGamemodeEntity) {
        this.http.post(this.apiURL + "/admin/gamemodes", body).subscribe((res) => {
            console.log(res);
        });
    }

    public updateGamemode(body: AdminGamemodeEntity, id: number) {
        return this.http.patch<AdminGamemodeEntity>(this.apiURL + "/admin/gamemodes/" + id, body).subscribe(
            (res: AdminGamemodeEntity) => {
                console.log(res);
            },
            (error: Error) => {
                console.log(error);
            }
        );
        // return this.http.put(this.apiURL + "/admin/gamemodes/" + id, body);
    }

    public rulesString(arrayRules: string[]): string {
        return arrayRules.join(";");
    }

    public rulesArray(stringRules: string): string[] {
        return stringRules.split(";");
    }
}

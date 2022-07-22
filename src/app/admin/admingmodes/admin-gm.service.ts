import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { EnvService } from "src/app/env/env.service";
import { AdminGamemodeEntity } from "../entity/admin-gamemode.entity";

@Injectable()
export class AdminGamemodeService {
    private apiURL: string = this.env.url;

    public gms: AdminGamemodeEntity[] = [];

    constructor(private http: HttpClient, private readonly env: EnvService) {
        this.http
            .get<AdminGamemodeEntity[]>(this.apiURL + "/admin/gamemodes")
            .subscribe((res: AdminGamemodeEntity[]) => {
                this.gms = res;
            });
    }

    public deleteGM(gamemodeId: number) {
        this.http.delete(this.apiURL + "/admin/gamemodes/" + gamemodeId).subscribe((res) => {
            console.log(res);
        });
    }

    public deactivateGm(gamemodeId: number, deactivatedB: boolean) {
        const newGamemode: AdminGamemodeEntity = new AdminGamemodeEntity({
            deactivated: deactivatedB
        });
        this.http.patch(this.apiURL + "/admin/gamemodes/" + gamemodeId, newGamemode).subscribe((res) => {
            console.log(res);
        });
    }

    public creatGM(body): void {
        this.http.post(this.apiURL + "/admin/gamemodes/", body).subscribe(
            (res) => {
                console.log(res);
            },
            (error: Error) => {
                console.error(error);
            }
        );
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

    public postGamemode(body: AdminGamemodeEntity) {
        this.http.post(this.apiURL + "/admin/gamemodes", body).subscribe((res) => {
            console.log(res);
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
}

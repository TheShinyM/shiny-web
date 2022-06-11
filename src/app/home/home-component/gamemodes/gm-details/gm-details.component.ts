import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Gamemode } from "../entitiys/gamemode.entity";
import { GamemodeBack } from "../entitiys/gamemodeBack.entity";
import { GamemodeService } from "../gm.service";

@Component({
    selector: "app-gm-details",
    templateUrl: "./gm-details.component.html",
    styleUrls: ["./gm-details.component.scss"]
})
export class GmDetailsComponent implements OnInit {
    public id: number;
    public gm: Gamemode;

    public constructor(private route: ActivatedRoute, private gamemodeService: GamemodeService) {}

    public ngOnInit(): void {
        this.id = Number(this.route.snapshot.paramMap.get("id"));
        this.gamemodeService.getGamemode(this.id).subscribe((res: GamemodeBack) => {
            this.gm = new Gamemode({ ...res, rules: res?.rules?.split(";") });
        });
    }
}

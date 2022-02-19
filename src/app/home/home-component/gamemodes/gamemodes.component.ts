import { Component, OnInit } from "@angular/core";
import { GamemodeBack } from "./entitiys/gamemodeBack.entity";
import { GamemodeService } from "./gm.service";

@Component({
    selector: "app-gamemodes",
    templateUrl: "./gamemodes.component.html",
    styleUrls: ["./card/card.component.scss", "./gamemodes.component.scss"]
})
export class GamemodesComponent implements OnInit {
    public gms: GamemodeBack[] = [
        //   {
        //   name: "WoolBattle",
        //   pictureURL: "https://shinycreators.de/img/wb_shiny_700.jpg"
        // },
        // {
        //   name: "Bedbreaker",
        //   pictureURL: "https://shinycreators.de/img/bb_jonas_700.jpg"
        // },
        // {
        //   name: "BuildUp",
        //   pictureURL: "https://shinycreators.de/img/bu_max_700.jpg"
        // }
    ];

    constructor(private gamemodeService: GamemodeService) {}

    public ngOnInit(): void {
        this.gamemodeService.getGamemodes().subscribe((gmodes: GamemodeBack[]) => {
            this.gms = gmodes;
        });
    }
}

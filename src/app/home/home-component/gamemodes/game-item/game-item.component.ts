import { Component, Input, OnInit } from "@angular/core";
import { GameItem } from "../entitiys/game-item.entity";

@Component({
    selector: "app-game-item",
    templateUrl: "./game-item.component.html",
    styleUrls: ["./game-item.component.scss"]
})
export class GameItemComponent implements OnInit {
    @Input() public gameItem: GameItem;

    constructor() {}

    ngOnInit(): void {}
}

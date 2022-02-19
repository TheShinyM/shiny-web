import { Component, OnInit } from "@angular/core";
import { AdminGeneralService } from "../admingm.service";
import { AdminGamemodeEntity } from "../entity/admin-gamemode.entity";

@Component({
    selector: "app-admingmodes",
    templateUrl: "./admingmodes.component.html",
    styleUrls: ["./admingmodes.component.scss"]
})
export class AdmingmodesComponent implements OnInit {
    public gms: AdminGamemodeEntity[] = [];

    constructor(private admingmService: AdminGeneralService) {
        this.admingmService.getGamemodes().subscribe((res: AdminGamemodeEntity[]) => {
            this.gms = res;
        });
    }

    ngOnInit(): void {}
}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WebCommonModule } from "src/app/common/common.module";
import { CardComponent } from "./card/card.component";
import { GamemodesComponent } from "./gamemodes.component";
import { GmDetailsComponent } from "./gm-details/gm-details.component";
import { GamemodeService } from "./gm.service";

const ROUTES: Routes = [
    {
        path: "",
        pathMatch: "full",
        component: GamemodesComponent
    },
    {
        path: ":id",
        component: GmDetailsComponent
    }
];

@NgModule({
    imports: [WebCommonModule, CommonModule, RouterModule.forChild(ROUTES)],
    declarations: [GamemodesComponent, CardComponent, GmDetailsComponent],
    providers: [GamemodeService]
})
export class GamemodeModule {}

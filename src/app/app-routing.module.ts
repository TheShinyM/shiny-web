import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WebCommonModule } from "./common/common.module";
import { RulesComponent } from "./home/home-component/rules/rules.component";
import { SocialsComponent } from "./home/home-component/socials/socials.component";
import { TeamHomeComponent } from "./home/home-component/team-home/team-home.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "team",
        component: TeamHomeComponent
    },
    {
        path: "socials",
        component: SocialsComponent
    },
    {
        path: "rules",
        component: RulesComponent
    },
    {
        path: "gamemodes",
        loadChildren: () => import("./home/home-component/gamemodes/gm.module").then((m) => m.GamemodeModule)
    },
    {
        path: "auth",
        loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule)
    },
    {
        path: "sources",
        loadChildren: () => import("./web-sources/websources.module").then((m) => m.WebSourcesModule)
    },
    {
        path: "admin",
        loadChildren: () => import("./admin/admin.module").then((m) => m.AdminModule)
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [WebCommonModule, CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}

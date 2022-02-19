import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
        // component: GamemodesComponent,
        loadChildren: () => import("./home/home-component/gamemodes/gm.module").then((m) => m.GamemodeModule)
    },
    // {
    //     path: "gamemodes/:id",
    //     component: GmDetailsComponent
    // },
    {
        path: "auth",
        // component: AuthComponent,
        loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule)
    },
    {
        path: "admin",
        // component: AdminComponent,
        loadChildren: () => import("./admin/admin.module").then((m) => m.AdminModule)
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}

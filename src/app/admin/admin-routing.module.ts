import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AdmingmodesComponent } from "./admingmodes/admingmodes.component";
import { AdminGmDetailsComponent } from "./admingmodes/gm-details/gm-details.component";
import { RulesAComponent } from "./rules/rules.component";
import { UserDetailsComponent } from "./users/user-details/user-details.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "users"
    },
    {
        path: "gm",
        component: AdminComponent,
        children: [
            {
                path: "",
                pathMatch: "full",
                component: AdmingmodesComponent
            },
            {
                path: ":id",
                component: AdminGmDetailsComponent
            }
        ]
    },
    {
        path: "rules",
        component: AdminComponent,
        children: [
            {
                path: "",
                pathMatch: "full",
                component: RulesAComponent
            }
        ]
    },
    {
        path: "users",
        component: AdminComponent,
        children: [
            {
                path: "",
                pathMatch: "full",
                component: UsersComponent
            },
            {
                path: ":id",
                component: UserDetailsComponent
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}

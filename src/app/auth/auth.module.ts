import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { WebCommonModule } from "../common/common.module";
import { MatModule } from "../mat-modules/mat.modules";
import { AuthComponent } from "./auth.component";
import { RegisterComponent } from "./register/register.component";

const ROUTES: Routes = [
    {
        path: "",
        component: AuthComponent,
        pathMatch: "full"
    },
    {
        path: "register",
        component: RegisterComponent
    }
];

@NgModule({
    declarations: [AuthComponent, RegisterComponent],
    imports: [
        WebCommonModule,
        MatModule,
        RouterModule.forChild(ROUTES),
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ToastrModule
    ]
})
export class AuthModule {}

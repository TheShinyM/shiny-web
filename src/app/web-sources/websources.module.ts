import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WebCommonModule } from "../common/common.module";
import { WebSourcesComponent } from "./web-sources.component";

const ROUTES: Routes = [
    {
        path: "",
        component: WebSourcesComponent
    }
];

@NgModule({
    imports: [WebCommonModule, CommonModule, RouterModule.forChild(ROUTES)],
    declarations: [WebSourcesComponent]
})
export class WebSourcesModule {}

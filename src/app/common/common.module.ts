import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { MatModule } from "../mat-modules/mat.modules";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header-component/header-component.component";

@NgModule({
    imports: [RouterModule, TranslateModule.forChild(), MatModule, CommonModule],
    declarations: [FooterComponent, HeaderComponent],
    exports: [FooterComponent, HeaderComponent]
})
export class WebCommonModule {}

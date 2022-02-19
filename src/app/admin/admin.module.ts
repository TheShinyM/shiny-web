import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WebCommonModule } from "../common/common.module";
import { MatModule } from "../mat-modules/mat.modules";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { AdminGeneralService } from "./admingm.service";
import { AdminGamemodeService } from "./admingmodes/admin-gm.service";
import { AdmingmodesComponent } from "./admingmodes/admingmodes.component";
import { AdminGmDetailsComponent } from "./admingmodes/gm-details/gm-details.component";
import { RulesAComponent } from "./rules/rules.component";
import { RulesService } from "./rules/rules.service";
import { AdminUserService } from "./users/service/users.service";
import { UsersComponent } from "./users/users.component";
import { UserDetailsComponent } from './users/user-details/user-details.component';

@NgModule({
    imports: [WebCommonModule, CommonModule, AdminRoutingModule, MatModule],
    declarations: [AdminComponent, AdmingmodesComponent, AdminGmDetailsComponent, RulesAComponent, UsersComponent, UserDetailsComponent],
    providers: [AdminGamemodeService, AdminGeneralService, RulesService, AdminUserService]
})
export class AdminModule {}

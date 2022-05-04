import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { JwtModule } from "@auth0/angular-jwt";
import { AngularFullpageModule } from "@fullpage/angular-fullpage";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ToastrModule } from "ngx-toastr";
import { HomeRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthInterceptor } from "./auth/interceptors/auth-interceprot";
import { WebCommonModule } from "./common/common.module";
import { GamemodeModule } from "./home/home-component/gamemodes/gm.module";
import { GamemodeService } from "./home/home-component/gamemodes/gm.service";
import { RulesComponent } from "./home/home-component/rules/rules.component";
import { SocialsComponent } from "./home/home-component/socials/socials.component";
import { TeamHomeComponent } from "./home/home-component/team-home/team-home.component";
import { ContactComponent } from "./home/home-content/contact/contact.component";
import { HomeContentComponent } from "./home/home-content/home-content.component";
import { IntroComponent } from "./home/home-content/intro/intro.component";
import { PartnerComponent } from "./home/home-content/partner/partner.component";
import { RanksComponent } from "./home/home-content/ranks/ranks.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

export function tokenGetter(): string | null {
    return localStorage.getItem("jwt");
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TeamHomeComponent,
        HomeContentComponent,
        PageNotFoundComponent,
        SocialsComponent,
        RulesComponent,
        PartnerComponent,
        RanksComponent,
        ContactComponent,
        IntroComponent
    ],
    imports: [
        BrowserModule,
        HomeRoutingModule,
        FlexLayoutModule,
        GamemodeModule,
        WebCommonModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        JwtModule.forRoot({
            config: {
                tokenGetter
            }
        }),
        AngularFullpageModule,
        MatIconModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        GamemodeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

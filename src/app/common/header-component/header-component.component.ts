import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/services/auth.service";
import { User } from "src/app/auth/services/user";

@Component({
    selector: "app-header",
    templateUrl: "./header-component.component.html",
    styleUrls: ["./header-component.component.scss"]
})
export class HeaderComponent implements OnInit, OnChanges {
    @Input() home: boolean = false;

    public open: boolean = true;

    public menuOpen: boolean = false;

    public user: User;

    public authenticated: boolean;

    constructor(public authService: AuthService) {
        this.user = this.authService.user;
    }

    public ngOnChanges(): void {
        this.authenticated = this.authService.isAuhenticated();
    }

    ngOnInit(): void {}
    public openMenu(): void {
        if (this.menuOpen === false) {
            // ! OPEN
            // document.getElementById("menus").style.display = "block";
            // document.getElementById("menus").style.transform = "translateY(0px)";
            // document.getElementById("menus").style.opacity = "1";
            // document.getElementById("menus").style.transition =
            //     "opacity 450ms ease-in-out, transform 450ms ease-in-out";
            // document.getElementById("menus").style.pointerEvents = "auto";
            this.menuOpen = true;
            setTimeout(() => {
                document.getElementById("mobileMenu").classList.add("mobile-menu-open");
            });
        } else if (this.menuOpen == true) {
            // document.getElementById("menus").style.display = "none";

            // document.getElementById("menus").style.pointerEvents = "none";
            // document.getElementById("menus").style.transition =
            //     "opacity 450ms ease-in-out, transform 450ms ease-in-out";
            // document.getElementById("menus").style.opacity = "0";
            // document.getElementById("menus").style.transform = "translateY(-20px)";
            document.getElementById("mobileMenu").classList.remove("mobile-menu-open");
            setTimeout(() => {
                this.menuOpen = false;
            }, 600);
        }
    }

    public logout(): void {
        this.authService.logout();
    }
}

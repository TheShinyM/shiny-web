import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from "@angular/core";
import { AuthService } from "src/app/auth/services/auth.service";
import { User } from "src/app/auth/services/user";

@Component({
    selector: "app-header",
    templateUrl: "./header-component.component.html",
    styleUrls: ["./header-component.component.scss"]
})
export class HeaderComponent implements OnInit, OnChanges {
    @Input() home: boolean = false;

    @ViewChild("burgerMenuBtn") public burgerMenuBtn: ElementRef<HTMLButtonElement>;

    public open: boolean = true;

    public menuOpen: boolean = false;

    public mobileMenuProzessEnded: boolean = true;

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
        if (this.menuOpen === false && this.mobileMenuProzessEnded) {
            this.mobileMenuProzessEnded = false;
            // ! OPEN
            this.menuOpen = true;
            this.burgerMenuBtn.nativeElement.classList.toggle("opened");

            if (this.burgerMenuBtn.nativeElement.classList.contains("opened")) {
                this.burgerMenuBtn.nativeElement.setAttribute("aria-expanded", "");
            }
            setTimeout(() => {
                document.getElementById("mobileMenu").classList.add("mobile-menu-open");
                this.mobileMenuProzessEnded = true;
            }, 50);
        } else if (this.menuOpen == true && this.mobileMenuProzessEnded) {
            this.burgerMenuBtn.nativeElement.classList.toggle("opened");
            this.mobileMenuProzessEnded = false;
            document.getElementById("mobileMenu").classList.remove("mobile-menu-open");
            setTimeout(() => {
                this.menuOpen = false;
                this.mobileMenuProzessEnded = true;
            }, 600);
        }
    }

    public logout(): void {
        this.authService.logout();
    }
}

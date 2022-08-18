import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, ViewChild } from "@angular/core";
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

    @ViewChild("burgerMenuArea") public burgerMenu: ElementRef<HTMLButtonElement>;

    @HostListener("document:click", ["$event"]) public closeMenu(event: PointerEvent): void {
        const target: Node = event.target as Node;
        const burgerMenuArea: HTMLElement = this.burgerMenu?.nativeElement as HTMLElement;
        const burgerMenuBtn: HTMLElement = this.burgerMenuBtn?.nativeElement as HTMLElement;
        if ((!burgerMenuArea?.contains(target) || !burgerMenuBtn?.contains(target)) && this.menuOpen) {
            this.openMenu();
        }
    }

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

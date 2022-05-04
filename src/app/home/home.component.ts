import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    config: any;
    fullpage_api: any;

    public open: boolean = true;

    constructor() {
        this.config = {
            // fullpage options
            licenseKey: "E8B99B72-16C84745-96B3A6AE-817347D7",
            anchors: ["intro", "contact"],
            menu: "#menu",

            // fullpage callbacks
            afterResize: () => {
                console.log("After resize");
            }
        };
    }

    ngOnInit(): void {}

    public getRef(fullPageRef: any): void {
        this.fullpage_api = fullPageRef;
    }

    public openMenu(): void {
        if (this.open === true) {
            // document.getElementById("menus").style.display = "block";
            document.getElementById("menus").style.transform = "translateY(0px)";
            document.getElementById("menus").style.opacity = "1";
            document.getElementById("menus").style.transition =
                "opacity 450ms ease-in-out, transform 450ms ease-in-out";
            document.getElementById("menus").style.pointerEvents = "auto";
            this.open = false;
        } else if (this.open == false) {
            // document.getElementById("menus").style.display = "none";

            document.getElementById("menus").style.pointerEvents = "none";
            document.getElementById("menus").style.transition =
                "opacity 450ms ease-in-out, transform 450ms ease-in-out";
            document.getElementById("menus").style.opacity = "0";
            document.getElementById("menus").style.transform = "translateY(-20px)";

            this.open = true;
        }
    }
}

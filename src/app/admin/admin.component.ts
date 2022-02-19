import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Tab } from "./entity/tab.entity";

@Component({
    selector: "app-admin",
    templateUrl: "./admin.component.html",
    styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
    public tabs: Tab[] = [
        {
            name: "Users",
            icon: "people",
            url: ["/admin/users"]
        },
        {
            name: "Gamemodes",
            icon: "sports_esports",
            url: ["/admin/gm"]
        },
        {
            name: "Rules",
            icon: "history_edu",
            url: ["/admin/rules"]
        }
    ];

    constructor(private router: Router, private route: ActivatedRoute) {
        this.route.root.url.subscribe((params: any) => {
            console.log(params);
        });
        // this.router.navigateByUrl(this.tabs[0].url[0]);
    }

    ngOnInit(): void {}
}

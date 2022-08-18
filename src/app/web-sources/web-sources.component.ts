import { Component } from "@angular/core";
import { Link } from "./link";

@Component({
    selector: "app-web-sources",
    templateUrl: "./web-sources.component.html",
    styleUrls: ["./web-sources.component.scss"]
})
export class WebSourcesComponent {
    public links: Link[] = [
        {
            url: "https://www.flaticon.com/free-icons/link",
            text: "Link icons created by Freepik - Flaticon",
            pictureUrl: "https://img.shinycreators.de/link.png"
        },
        {
            url: "https://www.flaticon.com/free-icons/reward",
            text: "Reward icons created by Freepik - Flaticon",
            pictureUrl: "https://img.shinycreators.de/medal.png"
        },
        {
            url: "https://www.flaticon.com/free-icons/gaming",
            text: "Gaming icons created by mynamepong - Flaticon",
            pictureUrl: "https://img.shinycreators.de/joystick.png"
        },
        {
            url: "https://www.flaticon.com/free-icons/law",
            text: "Law icons created by Freepik - Flaticon",
            pictureUrl: "https://img.shinycreators.de/law.png"
        }
    ];
}

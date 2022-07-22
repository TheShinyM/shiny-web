import { Component } from "@angular/core";
import { EventService } from "./services/event.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    public constructor(private eventService: EventService) {
        this.eventService.sendWebEvent("website", new Date(), new Date(), "1");
    }
}

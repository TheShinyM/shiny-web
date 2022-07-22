import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EnvService } from "../env/env.service";
import { WebStatsEvent } from "./webstats.event";

@Injectable({
    providedIn: "root"
})
export class EventService {
    public constructor(private httpClient: HttpClient, private readonly env: EnvService) {}

    public sendWebEvent(server: string, start: Date, end: Date, size: string) {
        const event: WebStatsEvent = new WebStatsEvent({
            server,
            start,
            end,
            size
        });
        this.httpClient.post(this.env.url + "/events/website", event).subscribe();
    }
}

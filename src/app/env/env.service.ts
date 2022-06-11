import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class EnvService {
    public url: string = "https://shinyCreators.de:3000";
}

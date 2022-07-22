import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class EnvService {
    public url: string = "https://shinycreators.de:3000";
    // public url: string = "http://localhost:3000";
}

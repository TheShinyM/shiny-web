import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class EnvService {
    public url: string = "http://37.114.47.88:3000";
}

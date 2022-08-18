import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: "app-teamspeak-confirm",
    templateUrl: "./teamspeak-confirm.component.html",
    styleUrls: ["./teamspeak-confirm.component.scss"]
})
export class TeamspeakConfirmComponent {
    public constructor(private toastr: ToastrService) {}

    public copyAdress(): void {
        this.toastr.success("Adresse kopiert");
        const selBox = document.createElement("textarea");
        selBox.style.position = "fixed";
        selBox.style.left = "0";
        selBox.style.top = "0";
        selBox.style.opacity = "0";
        selBox.value = "shinycreators.de";
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand("copy");
        document.body.removeChild(selBox);
    }
}

import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TeamspeakConfirmComponent } from "../teamspeak-confirm/teamspeak-confirm.component";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
    public constructor(private dialog: MatDialog) {}

    public hasTeamspeak(): void {
        this.dialog.open<TeamspeakConfirmComponent>(TeamspeakConfirmComponent, {
            panelClass: ["teamspeak-bg"]
        });
    }
}

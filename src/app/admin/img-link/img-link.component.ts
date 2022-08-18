import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "app-img-link",
    templateUrl: "./img-link.component.html",
    styleUrls: ["./img-link.component.scss"]
})
export class ImgLinkComponent {
    public newLink: FormControl = this.formBuilder.control(null);

    public addLinkForm: FormGroup = this.formBuilder.group({
        newLink: this.newLink
    });

    constructor(private formBuilder: FormBuilder) {}
}

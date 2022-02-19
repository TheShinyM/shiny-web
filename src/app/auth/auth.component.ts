import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";

@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
    public notValid: boolean = false;

    public email: FormControl = this.formBuilder.control(null, []);
    public password: FormControl = this.formBuilder.control(null, []);

    public loginForm: FormGroup = this.formBuilder.group({
        email: this.email,
        password: this.password
    });

    constructor(private route: Router, private formBuilder: FormBuilder, private authService: AuthService) {
        if (this.authService.isAuhenticated()) {
            this.route.navigate(["/admin"]);
        }
    }

    ngOnInit(): void {}

    public login(): void {
        this.authService.login(this.email.value, this.password.value).subscribe(
            () => {
                this.route.navigate(["/admin"]);
            },
            (error: HttpErrorResponse) => {
                this.notValid = true;
            }
        );
    }
}

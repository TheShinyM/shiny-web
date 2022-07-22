import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthDTO } from "./dtos/auth.dto";
import { AuthService } from "./services/auth.service";

@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth.component.scss"]
})
export class AuthComponent {
    public notValid: boolean = false;

    public email: FormControl = this.formBuilder.control(null, [Validators.required]);
    public password: FormControl = this.formBuilder.control(null, [Validators.minLength(8)]);

    public loginForm: FormGroup = this.formBuilder.group({
        email: this.email,
        password: this.password
    });

    constructor(
        private route: Router,
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private toatr: ToastrService
    ) {
        if (this.authService.isAuhenticated()) {
            this.route.navigate(["/admin"]);
        }
    }

    ngOnInit(): void {}

    public login(): void {
        if (this.loginForm.valid) {
            this.authService.login(this.email.value, this.password.value).subscribe(
                (res: AuthDTO) => {
                    this.route.navigate(["/admin"]);
                },
                () => {
                    this.toatr.error("Falsche Anmeldedaten");
                    this.notValid = true;
                }
            );
        }
    }
}

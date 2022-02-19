import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
    public name: FormControl = new FormControl(null, [Validators.required]);

    public email: FormControl = new FormControl(null, [Validators.required, Validators.email]);

    public password: FormControl = new FormControl(null, [Validators.required]);

    public password2: FormControl = new FormControl(null, [Validators.required]);

    public registerForm: FormGroup = new FormGroup({
        name: this.name,
        email: this.email,
        password: this.password,
        password2: this.password2
    });

    public passwordIsNotSame: boolean = false;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {}

    public registerUser(): void {
        if (this.registerForm.valid) {
            if (this.password.value === this.password2.value) {
                this.authService.register(this.email.value, this.name.value, this.password.value).subscribe;
            } else {
            }
        }
    }
}

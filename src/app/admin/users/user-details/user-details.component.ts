import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/auth/services/user';
import { UserRole } from 'src/app/auth/services/user-role';
import { AdminUserService } from '../service/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  public user: User;

  public roles: typeof UserRole = UserRole;

  public id: number;

  public isAdmin: boolean;

  public role: FormControl = this.formBuilder.control(null, [
    Validators.required,
  ]);

  public form: FormGroup = new FormGroup({
    role: this.role,
  });

  constructor(
    private router: ActivatedRoute,
    private userService: AdminUserService,
    private formBuilder: FormBuilder,
    private route: Router,
    public readonly authService: AuthService
  ) {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.userService.getUser(this.id).subscribe((user: User) => {
        this.user = user;
        console.log(user);
        // this.isAdmin = this.user.hasRole(UserRole.ADMIN) ? true : false;
        this.form.patchValue({
          role: this.user?.roles,
        });
      });
    });
  }

  public saveUser(): void {
    this.userService
      .saveUser(
        new User({
          ...this.user,
          roles: this.role.value,
        })
      )
      .subscribe(() => {
        this.route.navigateByUrl('/admin/users');
      });
  }
}

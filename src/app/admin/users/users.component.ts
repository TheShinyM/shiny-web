import { Component, OnInit } from "@angular/core";
import { User } from "src/app/auth/services/user";
import { AdminUserService } from "./service/users.service";

@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
    public users: User[] = [];

    constructor(private userService: AdminUserService) {
        this.userService.getAllUsers().subscribe((users: User[]) => {
            this.users = users;
        });
    }

    ngOnInit(): void {}
}

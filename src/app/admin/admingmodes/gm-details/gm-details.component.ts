import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { GameItem } from "src/app/home/home-component/gamemodes/entitiys/game-item.entity";
import { AdminGeneralService } from "../../admingm.service";
import { AdminGamemodeEntity } from "../../entity/admin-gamemode.entity";
import { gmBack } from "../../entity/gmBack";
import { AdminGamemodeService } from "../admin-gm.service";

@Component({
    selector: "app-gm-details",
    templateUrl: "./gm-details.component.html",
    styleUrls: ["./gm-details.component.scss"]
})
export class AdminGmDetailsComponent implements OnInit {
    public id: number;
    public gm: AdminGamemodeEntity;
    public editMode: boolean = false;
    public editModeControl: string;

    public name: FormControl = this.formBuilder.control(null, [Validators.required]);
    public description: FormControl = this.formBuilder.control(null, [Validators.required]);
    public pictureURL: FormControl = this.formBuilder.control(null, [Validators.required]);
    public backgroundURL: FormControl = this.formBuilder.control(null, [Validators.required]);
    public rules: FormArray = new FormArray([]);
    // public gameItems: FormArray = new FormArray([]);

    public deactivated: boolean;
    public deactMessage: string;

    public form: FormGroup = this.formBuilder.group({
        name: this.name,
        description: this.description,
        pictureURL: this.pictureURL,
        backgroundURL: this.backgroundURL,
        rules: this.rules
        // gameItems: this.gameItems
    });

    constructor(
        private router: ActivatedRoute,
        private adminService: AdminGeneralService,
        private formBuilder: FormBuilder,
        private route: Router,
        private admingmService: AdminGamemodeService
    ) {
        this.router.params.subscribe((params: Params) => {
            this.id = params["id"];
            this.editModeControl = params["id"];
        });
    }

    ngOnInit(): void {
        if (this.editModeControl === "create") {
            this.editMode = true;
            this.deactMessage = "Deaktivieren";
            this.deactivated = true;
        } else {
            if (this.gm === undefined) {
                this.adminService.getGamemodeBack(this.id).subscribe((res: AdminGamemodeEntity) => {
                    this.gm = res;
                    if (this.gm.deactivated) {
                        this.deactMessage = "Aktivieren";
                    } else {
                        this.deactMessage = "Deaktivieren";
                    }
                    const truegm: gmBack = new gmBack({
                        ...this.gm,
                        rules: this.rulesArray(this.gm.rules)
                    });
                    this.form.patchValue(truegm);
                    if (truegm.rules.length > 0 && truegm.rules[0] !== "") {
                        for (let rule of truegm.rules) {
                            this.rules.push(new FormControl(rule, []));
                        }
                    }
                });
            }
            if (this.gm !== undefined) {
                this.form.patchValue(this.gm);
            }
        }
    }

    public rulesArray(stringRules: string): string[] {
        return stringRules.split(";");
    }

    public rulesString(arrayRules: string[]): string {
        return arrayRules.join(";");
    }

    public saveGm(): void {
        const trueRules: string = this.rulesString(this.rules.value);
        const truegm: AdminGamemodeEntity = new AdminGamemodeEntity({
            ...this.form.value,
            rules: trueRules,
            deactivated: this.deactivated
        });
        if (!this.editMode) {
            truegm.id = this.id;
            // truegm.deactivated = this.deactivated;
            this.adminService.updateGamemode(truegm, this.id);
            this.route.navigateByUrl("/admin/gm");
        } else {
            this.admingmService.creatGM(truegm);
            this.route.navigateByUrl("/admin/gm");
        }
    }

    public get rulesForm(): AbstractControl[] {
        return (this.form.controls["rules"] as FormArray).controls;
    }

    // public get gameItemForm(): AbstractControl[] {
    //     return (this.form.controls["gameItems"] as FormArray).controls;
    // }

    public addRule(): void {
        (this.form.get("rules") as FormArray).push(new FormControl(null, []));
    }

    public deleteRule(i: number): void {
        (this.form.get("rules") as FormArray).removeAt(i);
    }

    // GM Actions

    public deactivateGM(): void {
        this.gm.deactivated = !this.gm.deactivated;
        if (this.gm.deactivated) {
            this.deactMessage = "Aktivieren";
        } else {
            this.deactMessage = "Deaktivieren";
        }
        this.admingmService.deactivateGm(this.gm.id, this.gm.deactivated);
    }

    public deleteGM(): void {
        this.admingmService.deleteGM(this.gm.id);
    }

    public convertGameItemsForForm(gi: GameItem[]) {}
}

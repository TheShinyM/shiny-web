import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { EnvService } from "src/app/env/env.service";
import { Rule } from "src/app/home/home-component/rules/entities/rule.entity";
import { RulesService } from "./rules.service";

@Component({
    selector: "app-rules",
    templateUrl: "./rules.component.html",
    styleUrls: ["./rules.component.scss"]
})
export class RulesAComponent {
    private apiUrl: string = this.env.url;

    public rules: FormArray = new FormArray([]);

    public rulesForm: FormGroup = this.formBuilder.group({
        rules: this.rules
    });

    public get rulesAbstractForm(): AbstractControl[] {
        return (this.rulesForm.controls["rules"] as FormArray).controls;
    }

    public constructor(
        private formBuilder: FormBuilder,
        private rulesService: RulesService,
        private router: Router,
        private http: HttpClient,
        private readonly env: EnvService
    ) {
        this.getRulesComponent();
    }

    public async getRulesComponent(): Promise<void> {
        this.rulesService.getRules().subscribe((res: Rule[]) => {
            const rul: Rule[] = this.makeRuleArray(res[0].rules);

            rul.forEach((rule: Rule) => {
                this.rules.push(new FormControl(rule.rules, []));
            });
        });
    }

    public removeRule(id: number): void {
        (this.rulesForm.get("rules") as FormArray).removeAt(id);
    }

    public addRule(): void {
        (this.rulesForm.get("rules") as FormArray).push(new FormControl(null, []));
    }

    public saveRules(): void {
        const rulesArray: string[] = this.rules.value;
        const rulesString: string = rulesArray.join(";");
        this.rulesService.saveRules(rulesString).subscribe((res: Rule) => {
            this.router.navigateByUrl("/admin");
        });
    }

    // public makeRuleArray(rules: string): string[] {
    //     const rulesString: string[] = rules.split(";");
    //     rulesString.forEach((rule: string) => {
    //         this.rules.push(new FormControl(rule, []));
    //     });

    //     return rulesString;
    // }
    public makeRuleArray(rules: string): Rule[] {
        const stringArray: string[] = rules.split(";");
        const ruleFormArray: Rule[] = [];
        stringArray.forEach((stringA: string) => {
            ruleFormArray.push({ rules: stringA });
        });
        return ruleFormArray;
    }
}

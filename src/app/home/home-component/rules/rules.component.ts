import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { EnvService } from "src/app/env/env.service";
import { Rule } from "./entities/rule.entity";
import { RuleService } from "./rule.service";

@Component({
    selector: "app-rules",
    templateUrl: "./rules.component.html",
    styleUrls: ["./rules.component.scss"]
})
export class RulesComponent implements OnInit {
    private apiUrl: string = this.env.url;

    public rules: string[] = [];

    constructor(private ruleService: RuleService, private http: HttpClient, private readonly env: EnvService) {
        // this.ruleService.getRules().subscribe((res: Rule[]) => {
        //     this.makeRuleArray(res[0].rules);
        // });
        this.http.get(this.apiUrl + "/rules").subscribe((res: Rule[]) => {
            this.makeRuleArray(res[0].rules);
        });
    }

    public makeRuleArray(stringRules: string) {
        if (stringRules) {
            this.rules = stringRules?.split(";");
        }
    }

    ngOnInit(): void {}
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { EnvService } from "src/app/env/env.service";
import { Rule } from "./entities/rule.entity";

@Injectable({
    providedIn: "root"
})
export class RuleService {
    private apiUrl: string = this.env.url;

    private rules: string[] = [];
    private stringRules: string = "";

    public constructor(private http: HttpClient, private readonly env: EnvService) {}

    public makeRuleArray(stringRules: string) {
        this.rules = stringRules.split(";");
    }

    public getRules(): Observable<Rule[]> {
        if (this.stringRules) {
            let rule: Rule[] = [];
            rule.push({
                rules: this.stringRules
            });
            return of(rule);
        }
        return this.http.get(this.apiUrl + "/rules").pipe(
            tap((res: Rule[]) => {
                this.makeRuleArray(res[0].rules);
                return res;
            })
        );
    }
}

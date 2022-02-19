import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EnvService } from 'src/app/env/env.service';
import { Rule } from 'src/app/home/home-component/rules/entities/rule.entity';
import { RulesService } from './rules.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesAComponent implements OnInit {
  private apiUrl: string = this.env.url;

  public rules: FormArray = new FormArray([]);

  public rulesForm: FormGroup = this.formBuilder.group({
    rules: this.rules,
  });

  public get rulesAbstractForm(): AbstractControl[] {
    return (this.rulesForm.controls['rules'] as FormArray).controls;
  }

  public constructor(
    private formBuilder: FormBuilder,
    private rulesService: RulesService,
    private router: Router,
    private http: HttpClient,
    private readonly env: EnvService
  ) {
    // const rules: string[] = await this.rulesService.getRules();
    // console.log("rule details");
    // console.log(rules);
    // rules?.forEach((rule: string) => {
    //     this.rules.push(new FormControl(rule, []));
    // });
    this.http
      .get(this.apiUrl + 'rules')
      // .pipe(tap((res: Rule[]) => this.makeRuleArray(res[0].rules)))
      .subscribe((res: Rule[]) => {
        // console.log(res);
        // console.log("rules");
        console.log(this.makeRuleArray(res[0].rules));
        // this.makeRuleArray(res[0].rules);
        if (res[0].rules.length <= 0) {
          this.getRulesComponent();
        }
        return res[0].rules;
      });
  }

  public async getRulesComponent(): Promise<void> {
    this.rulesService.getRules().subscribe((res: Rule[]) => {
      const rul: Rule[] = this.rulesService.makeRuleArray(res[0].rules);
      rul.forEach((rule: Rule) => {
        this.rules.push(new FormControl(rule.rules, []));
      });
    });
    // console.log(rules);

    // rules?.forEach((rule: string) => {
    //     this.rules.push(new FormControl(rule, []));
    // });
  }

  ngOnInit(): void {}

  public removeRule(id: number): void {
    (this.rulesForm.get('rules') as FormArray).removeAt(id);
  }

  public addRule(): void {
    (this.rulesForm.get('rules') as FormArray).push(new FormControl(null, []));
  }

  public saveRules(): void {
    console.log('save');
    const rulesArray: string[] = this.rules.value;
    const rulesString: string = rulesArray.join(';');
    this.rulesService.saveRules(rulesString).subscribe((res: Rule) => {
      this.router.navigateByUrl('/admin');
    });
  }

  public makeRuleArray(rules: string): string[] {
    const rulesString: string[] = rules.split(';');
    rulesString.forEach((rule: string) => {
      this.rules.push(new FormControl(rule, []));
    });

    return rulesString;
  }
}

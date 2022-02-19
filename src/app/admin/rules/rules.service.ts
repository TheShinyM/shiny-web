import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EnvService } from 'src/app/env/env.service';
import { Rule } from 'src/app/home/home-component/rules/entities/rule.entity';

@Injectable()
export class RulesService {
  private apiUrl: string = this.env.url;

  private rules: Rule[] = [
    // "Respektvoller freundlicher Umgang",
    // "Modifikationen außer Badlion, Lunar und Labymod verboten",
    // "Keine Beleidigung, Werbung, rassistische, extremistische oder andere illegale Aussagen",
    // "Keine unangebrachten, illegalen Skins",
    // "Keine anstößigen Namen",
    // "Die Nutzungsbedingungen können jederzeit von den Admins ohne Ankündigung geändert werden",
    // "Das Faken von Berühmtheiten oder Teammitgliedern ist untersagt",
    // "Namen dürfen generell keine beleidigenden o. Ä. Inhalte haben.",
    // "Kein Spam mit Nachrichten oder CAPS",
    // "Jeder Angriff gegen diesen Server ist strafbar und kann zur Anzeige gebracht werden.",
    // "Das Mitschneiden von Gesprächen auf dem gesamten Server ist nur in Absprache mit den anwesenden Usern des Channels erlaubt.",
    // "Private Daten, wie Telefonnummern, Adressen, Passwörter, usw. dürfen nicht öffentlich ausgetauscht werden. Wir werden dich niemals nach privaten Daten fragen",
    // "Alle bis jetzt oder zukünftige Bauwerke (gebaute Minecraft Maps, erstellte Bilder, programmierte Plugins, etc.) und umgesetzte Ideen gehören ShinyCreators",
    // "Mit dem betreten eines beliebigen ShinyCreators Servers (Teamspeak, Discord, Minecraft) akzeptierst du die Nutzungsbedingungen"
  ];

  public constructor(
    private http: HttpClient,
    private readonly env: EnvService
  ) {}

  public makeRuleArray(rules: string): Rule[] {
    const stringArray: string[] = rules.split(';');
    stringArray.forEach((stringA: string) => {
      this.rules.push({ rules: stringA });
    });
    return this.rules;
  }

  public getRules(): Observable<Rule[]> {
    if (this.rules.length > 0) {
      return of(this.rules);
    } else {
      return this.http
        .get<Rule[]>(this.apiUrl + 'admin/rules')
        .pipe(tap((res: Rule[]) => this.makeRuleArray(res[0].rules)));
    }
  }

  public saveRules(rules: string): Observable<Rule> {
    const updatedRule: Rule = new Rule({
      rules: rules,
    });
    return this.http
      .patch<Rule>(this.apiUrl + 'admin/rules/1', updatedRule)
      .pipe(tap((rule: Rule) => (this.rules = this.makeRuleArray(rule.rules))));
  }
}

export class AdminGamemode {
  name: string;
  description: string;
  pictureURL: string;
  backgroundURL: string;
  rules: string[];

  public rulesString(): string {
    return this.rules.join(";");
  }

  public rulesArray(stringRules: string): string[] {
    return stringRules.split(";");
  }
}

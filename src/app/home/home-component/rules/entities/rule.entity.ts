export class Rule {
    rules: string;

    constructor(rules?: Partial<Rule>) {
        if (rules) {
            Object.assign(this, rules);
        }
    }
}

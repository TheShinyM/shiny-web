export class gmBack {
    name: string;
    id: number;
    pictureURL: string;
    description: string;
    rules: string[];
    backgroundURL: string;

    public constructor(name?: Partial<gmBack>) {
        Object.assign(this, name);
    }

    public rulesString(arrayRules: string[]): string {
        return arrayRules.join(";");
    }

    public rulesArray(stringRules: string): string[] {
        return stringRules.split(";");
    }
}

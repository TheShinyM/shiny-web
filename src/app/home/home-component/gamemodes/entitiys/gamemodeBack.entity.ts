export class GamemodeBack {
    name: string;
    id: number;
    pictureURL: string;
    description: string;
    rules: string;
    backgroundURL: string;

    constructor(gmB?: Partial<GamemodeBack>) {
        if (gmB) {
            Object.assign(this, gmB);
        }
    }

    public toString(rul: string): string[] {
        return ["t", "d"];
        // rul.split(";");
    }
}

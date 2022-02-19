export class Gamemode {
    name: string;
    id: number;
    pictureURL: string;
    description: string;
    rules: string[];
    backgroundURL: string;

    constructor(gm?: Partial<Gamemode>) {
        if (gm) {
            Object.assign(this, gm);
        }
    }
}

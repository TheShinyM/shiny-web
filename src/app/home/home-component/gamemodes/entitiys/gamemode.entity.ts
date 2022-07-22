import { GameItem } from "./game-item.entity";

export class Gamemode {
    public name: string;

    public id: number;

    public pictureURL: string;

    public description: string;

    public rules: string[];

    public backgroundURL: string;

    public gameItems: GameItem[];

    constructor(gm?: Partial<Gamemode>) {
        if (gm) {
            Object.assign(this, gm);
        }
    }
}

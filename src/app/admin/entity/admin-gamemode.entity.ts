import { GameItem } from "src/app/home/home-component/gamemodes/entitiys/game-item.entity";

export class AdminGamemodeEntity {
    name: string;
    id: number;
    pictureURL: string;
    description: string;
    backgroundURL: string;
    rules: string;
    deactivated: boolean;
    public gameItems: GameItem[];

    public constructor(name?: Partial<AdminGamemodeEntity>) {
        Object.assign(this, name);
    }
}

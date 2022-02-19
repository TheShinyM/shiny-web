export class AdminGamemodeEntity {
    name: string;
    id: number;
    pictureURL: string;
    description: string;
    backgroundURL: string;
    rules: string;
    deactivated: boolean;

    public constructor(name?: Partial<AdminGamemodeEntity>) {
        Object.assign(this, name);
    }
}

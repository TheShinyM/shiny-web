export class Link {
    public url: string;

    public pictureUrl: string;

    public text: string;

    public constructor(link: Link) {
        Object.assign(this, link);
    }
}

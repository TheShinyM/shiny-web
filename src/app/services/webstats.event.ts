export class WebStatsEvent {
    public server: string;
    public start: Date;
    public end: Date;
    public size: string;

    public constructor(event: Partial<WebStatsEvent>) {
        Object.assign(this, event);
    }
}

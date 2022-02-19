import { Component, Input, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit{

  @Input() public dummy: number = 0;

  private _id: BehaviorSubject<number> = new BehaviorSubject<number>(this.dummy);

  @Input() name: string = "";
  @Input() pictureURL: string = "";
  public idIndex: string;

  @Input()
    set id(value: number) {
      this._id.next(value);
    }

  ngOnInit() {
    this._id.subscribe((res: number) => {
      this.idIndex = String(res);
    })
  }
}

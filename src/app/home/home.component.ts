import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public open: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public openMenu(): void{
    if (this.open === true) {
        // document.getElementById("menus").style.display = "block";
        document.getElementById("menus").style.transform = "translateY(0px)";
        document.getElementById("menus").style.opacity = "1";
        document.getElementById("menus").style.transition = "opacity 450ms ease-in-out, transform 450ms ease-in-out";
        document.getElementById("menus").style.pointerEvents = "auto";
        this.open = false;
    } else if (this.open == false) {
        // document.getElementById("menus").style.display = "none";

        document.getElementById("menus").style.pointerEvents = "none";
        document.getElementById("menus").style.transition = "opacity 450ms ease-in-out, transform 450ms ease-in-out";
        document.getElementById("menus").style.opacity = "0";
        document.getElementById("menus").style.transform = "translateY(-20px)";

        this.open = true;
    }
  }
}

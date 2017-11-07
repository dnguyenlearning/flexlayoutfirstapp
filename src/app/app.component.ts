import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colored:string[]=['#8E8E8E','#B9B9B9','#686161','#CCCCCC'];
  Maincolored=this.colored[0];
  show:boolean=false;
  changedColor(number){
    this.Maincolored=this.colored[number];
  }
  showHideControl(e){
    e.stopPropagation();
    this.show=(this.show)?false:true;
  }
}

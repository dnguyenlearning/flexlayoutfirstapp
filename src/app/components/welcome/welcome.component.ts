import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Input('colored') colored:string='#8E8E8E';
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'user-app',
  templateUrl: './user-app.component.html',
  styleUrls: ['./user-app.component.css']
})
export class UserAppComponent implements OnInit {
  users:any[]=[];
  @Input('colored') colored:string='#8E8E8E';
  constructor() { }

  ngOnInit() {
    this.users=[
      {title:'Project 1', author: 'Duong Nguyen'},
      {title:'Project 2', author: 'Duong Nguyen'},
      {title:'Project 3', author: 'Duong Nguyen'},
      {title:'Project 4', author: 'Duong Nguyen'},
      {title:'Project 5', author: 'Duong Nguyen'},
      {title:'Project 6', author: 'Duong Nguyen'},
      {title:'Project 7', author: 'Duong Nguyen'},
    ]
  }

}

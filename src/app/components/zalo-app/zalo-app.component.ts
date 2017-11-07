import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'zalo-app',
  templateUrl: './zalo-app.component.html',
  styleUrls: ['./zalo-app.component.css']
})
export class ZaloAppComponent implements OnInit {
  users:any[]=[];
  @Input('colored') colored:string='#8E8E8E';
  constructor() { }

  ngOnInit() {
    this.users=[
      {name:'user1', message: 'Last Massage'},
      {name:'user2', message: 'Last Massage'},
      {name:'user3', message: 'Last Massage'},
      {name:'user4', message: 'Last Massage'},
      {name:'user5', message: 'Last Massage'},
      {name:'user6', message: 'Last Massage'},
      {name:'user7', message: 'Last Massage'},
    ]
  }

}

import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input('colored') colored:string='#8E8E8E';
  constructor() { }

  ngOnInit() {
  }

}

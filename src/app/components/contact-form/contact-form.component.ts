import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input('colored') colored:string='#8E8E8E';
  constructor() { }

  ngOnInit() {
  }

}

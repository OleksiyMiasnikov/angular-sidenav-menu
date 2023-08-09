import { Component, Input } from '@angular/core';
import { Lead } from 'src/app/model/lead';

@Component({
  selector: 'app-lead-card',
  templateUrl: './lead-card.component.html',
  styleUrls: ['./lead-card.component.css']
})
export class LeadCardComponent {
  @Input() lead!: Lead;  

  onClick() {
    console.log(this.lead);
  }

}

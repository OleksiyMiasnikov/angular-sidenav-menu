import { Component, Input } from '@angular/core';
import { Lead } from 'src/app/model/lead';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent {
  @Input() lead!: Lead;  

  onClick() {
    console.log(this.lead);
  }
}

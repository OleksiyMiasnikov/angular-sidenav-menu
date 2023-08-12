import { Component, Input } from '@angular/core';
import { Lead } from 'src/app/model/lead';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-lead-card',
  templateUrl: './lead-card.component.html',
  styleUrls: ['./lead-card.component.css']
})
export class LeadCardComponent {
  @Input() lead!: Lead;  

  constructor(private service: ApiService) {}

  onClick() {
    //console.log(this.lead);
  }

  deleteLead() {    
    if(confirm(`Are you sure to delete lead:  ${this.lead.id}`)) {
      console.log(`deleting lead ${this.lead.id}`);
      this.service.deleteLead(this.lead);        
      window.location.reload();
    }
  }
}

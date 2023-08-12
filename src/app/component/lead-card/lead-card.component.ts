import { Component, Input } from '@angular/core';
import { Lead } from 'src/app/model/lead';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-lead-card',
  templateUrl: './lead-card.component.html',
  styleUrls: ['./lead-card.component.css']
})
export class LeadCardComponent {
  @Input() currentLead!: Lead;
  @Input() color!: string; 
  isLeadDetailsShown: boolean = false;

  constructor(private service: ApiService) {}

  onClick(event: Event) {
    if (event.target instanceof Element && (<Element>event.target).id == 'delete_icon') {      
      return;
    }
    this.isLeadDetailsShown = true;
  }

  deleteLead() {    
    if(confirm(`Are you sure to delete lead:  ${this.currentLead.id}`)) {
      console.log(`deleting lead ${this.currentLead.id}`);
      this.service.deleteLead(this.currentLead);        
      window.location.reload();
    }
  }

  closeLeadDetails() {
    this.isLeadDetailsShown = false;
  }
}

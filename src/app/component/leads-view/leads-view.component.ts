import { Component } from '@angular/core';

@Component({
  selector: 'app-leads-view',
  templateUrl: './leads-view.component.html',
  styleUrls: ['./leads-view.component.css']
})
  
export class LeadsViewComponent{
  isLeadDetailsShown: boolean = false;
  isColumnSettings: boolean = false;

  newLead() {
    this.isLeadDetailsShown = true;
  }

  closeLeadDetails() {
    this.isLeadDetailsShown = false;
  }

  columnSettings() {
    this.isColumnSettings = true;
  }

  closeColumnSettings() {
    this.isColumnSettings = false;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leads-toolbar',
  templateUrl: './leads-toolbar.component.html',
  styleUrls: ['./leads-toolbar.component.css']
})
export class LeadsToolbarComponent {
  @Input()
  view!: string;  
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

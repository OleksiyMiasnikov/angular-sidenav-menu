import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-leads-toolbar',
  templateUrl: './leads-toolbar.component.html',
  styleUrls: ['./leads-toolbar.component.css']
})
export class LeadsToolbarComponent {
  @Input()
  view!: string;  
  @Output()
  filterPattern = new EventEmitter<string>()
  isLeadDetailsShown: boolean = false;
  isColumnSettings: boolean = false;

  newLead() {
    this.isLeadDetailsShown = true;
  }

  applyFilter(event: Event) {
    const filertValue = (event.target as HTMLInputElement).value;
    this.filterPattern.emit(filertValue);
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

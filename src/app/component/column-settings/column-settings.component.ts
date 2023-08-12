import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-column-settings',
  templateUrl: './column-settings.component.html',
  styleUrls: ['./column-settings.component.css']
})
  
export class ColumnSettingsComponent {
  columnSettingsForm!: FormGroup; 
  @Output()
  componentClose = new EventEmitter <boolean>();
  
  savePressed() {    
    if (this.columnSettingsForm.invalid) {
      console.log("Errors: " + this.columnSettingsForm.errors);
      return;
    }     
    this.componentClose.emit(false);       
  }
  
  cancelPressed() { 
    console.log("Canceled");
    this.componentClose.emit(false);    
  }
}

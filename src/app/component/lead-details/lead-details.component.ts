import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Lead } from 'src/app/model/lead';
import { Stage } from 'src/app/model/stage';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-lead-details',
  templateUrl: './lead-details.component.html',
  styleUrls: ['./lead-details.component.css']
})
export class LeadDetailsComponent implements OnInit{
  @Input()
  currentLead!: Lead;
  @Output()
  inAction = new EventEmitter<boolean>();
  stages!: Stage[];
  leadForm!: FormGroup; 

  constructor(private service: ApiService) { }
  
  ngOnInit(): void {
    if (!this.currentLead) {
      this.currentLead = new Lead(-1, '', '', '');
    }  
    this.leadForm = new FormGroup({
    title: new FormControl(this.currentLead.title, [Validators.required, Validators.minLength(4)]),
    email: new FormControl(this.currentLead.email, [Validators.required, Validators.email]),
    stage: new FormControl(this.currentLead.stage, [Validators.required]),
  });
    this.stages = this.service.getStages();    
  }

  savePressed() {    
    if (this.leadForm.invalid) {
      console.log("Errors: " + this.leadForm.errors);
      return;
    }     
    console.log(this.leadForm.value);    
    if (this.currentLead.id < 0) {           
      this.service.addLead(this.createLead());
    } else {
      this.service.updateLead(this.createLead());     
    }
    
    location.reload();
    this.inAction.emit(false);       
  }
  
  cancelPressed() { 
    console.log("Canceled");
    this.inAction.emit(false);    
  }

  private createLead(): Lead {
    return new Lead(
      this.currentLead.id,
      this.leadForm.value.title,
      this.leadForm.value.email,
      this.leadForm.value.stage
    )
  }
}

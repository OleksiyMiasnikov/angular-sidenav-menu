import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output()
  inAction = new EventEmitter<boolean>();
  stages!: Stage[];
  lead!: Lead;
  leadForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    stage: new FormControl('', [Validators.required]),
  });

  constructor(private service: ApiService) { }
  
  ngOnInit(): void {
    this.stages = this.service.getStages();    
  }

  savePressed() {    
    if (this.leadForm.invalid) {
      console.log("Errors: " + this.leadForm.errors);
      return;
    }     
    console.log(this.leadForm.value);
    if (this.leadForm.value.title && this.leadForm.value.email && this.leadForm.value.stage) {
      this.service.addLead(new Lead(this.leadForm.value.title, this.leadForm.value.email, this.leadForm.value.stage));
    }
    window.location.reload();
    this.inAction.emit(false);       
  }
  
  cancelPressed() { 
    console.log("Canceled");
    this.inAction.emit(false);    
  }
}

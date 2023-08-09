import { Component, OnInit } from '@angular/core';
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
  stages!: Stage[];
  lead!: Lead;
  leadForm!: FormGroup;

  constructor(private service: ApiService) { }
  
  ngOnInit(): void {
    this.stages = this.service.getStages();
    this.leadForm = new FormGroup({
      title: new FormControl([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30)
      ]),
      stage: new FormControl([
          Validators.required
        ])      
    });
  }

  submit() {
    console.log(this.leadForm.value);
    if (this.leadForm.invalid) {      
      console.log("Errors: " + this.leadForm.errors);
      return;
    }
    
  }
}

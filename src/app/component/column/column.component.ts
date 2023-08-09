import { Component, Input, OnInit } from '@angular/core';
import { Lead } from 'src/app/model/lead';
import { ApiService } from 'src/app/service/api.service';
import { Stage } from 'src/app/model/stage';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
  
export class ColumnComponent implements OnInit{
  @Input() stage!: Stage;
  leads: Lead[] = [];
  
  constructor(private serveice: ApiService) {    
  }

  ngOnInit(): void {
    this.leads = this.serveice.getLeadsByStatus(this.stage.title);
  }

  drop(event: CdkDragDrop<Lead[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );    
    this.leads[event.currentIndex].stage = this.stage.title;
    this.updateLead(this.leads[event.currentIndex]);
  }
  
  addLead(lead: Lead) {
    //todo    
  }

  updateLead(lead: Lead) {
    this.serveice.updateLead(lead);   
  }
  
  deleteLead(lead: Lead) {
    //todo
  }
  
}



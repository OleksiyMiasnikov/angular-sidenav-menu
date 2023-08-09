import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { LeadComponent } from '../lead/lead.component';
import { Lead } from 'src/app/model/lead';
import { ApiService } from 'src/app/service/api.service';
import { Stage } from 'src/app/model/stage';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit{
  @ViewChild('column', { read: ViewContainerRef })
  container!: ViewContainerRef;

  @Input() stage!: Stage;
  leads: Lead[] = [];
  
  constructor(private serveice: ApiService) {    
  }

  ngOnInit(): void {
    this.leads = this.serveice.getLeadsByStatus(this.stage.title);
  }
  
  addLead() {
    //todo
    //this.container.createComponent(LeadComponent);

  }
  
}



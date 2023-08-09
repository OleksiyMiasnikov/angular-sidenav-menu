import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ColumnComponent } from '../column/column.component';
import { Stage } from 'src/app/model/stage';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit{

  @ViewChild('kanban', { read: ViewContainerRef })
  container!: ViewContainerRef;  
  
  stages: Stage[] = [];

  constructor(private service: ApiService) {    
  }

  ngOnInit(): void {
    this.stages = this.service.getStages();
  }

  addColumn() {
     //todo
    //this.container.createComponent(ColumnComponent);
  }

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Lead } from 'src/app/model/lead';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  leads!: Lead[];
  tableColumns: string[] = ['id', 'title', 'email', 'stage'];
  dataSource: any;

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.leads = this.service.getAllLeads();
    this.dataSource = new MatTableDataSource<Lead>(this.leads);
  }
  
}

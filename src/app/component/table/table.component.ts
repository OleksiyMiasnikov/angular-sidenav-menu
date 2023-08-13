import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';
import { Lead } from 'src/app/model/lead';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  leads!: Lead[];
  tableColumns: string[] = ['id', 'title', 'email', 'stage', 'menu'];
  dataSource!: MatTableDataSource<Lead>;

  constructor(private service: ApiService) { 
    this.leads = this.service.getAllLeads();
    this.dataSource = new MatTableDataSource<Lead, MatPaginator>(this.leads);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterPattern: string) {
    console.log('filter applying = ' + filterPattern);
    this.dataSource.filter = filterPattern;
  }
  
}

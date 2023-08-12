import { Component, OnInit } from '@angular/core';
import { SideNavMenuItem } from 'src/app/model/sidenav-menu-item';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  isWide: boolean = false; 
  menuItemsList!: SideNavMenuItem[];
  
  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.menuItemsList = this.service.getMenuItems();
  }
    
  init(): void {
    this.service.init();    
  }

  getPaddingLeft(): number {
    const element = document.querySelector('#side_nav_menu');
    return (element) ? element.clientWidth : 63;  
  }
}

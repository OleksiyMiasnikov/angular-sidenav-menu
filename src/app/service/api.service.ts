import { Injectable } from '@angular/core';
import { SideNavMenuItem } from '../model/sidenav-menu-item';
import { Lead } from '../model/lead';
import { Stage } from '../model/stage';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  getMenuItems(): SideNavMenuItem[] {
    return [
      { icon: 'dashboard', title: 'Kanban', link: 'kanban' },
      { icon: 'contacts', title: 'Contacts', link: 'contacts' },
      { icon: 'settings', title: 'Settings', link: 'settings' },
    ];
  }

  getStages(): Stage[] {
    return [
      { id: 1, title: 'New'},
      { id: 2, title: 'In progress'},
      { id: 3, title: 'Complete' },      
    ];
  }

  getLeadsByStatus(stage: string): Lead[] {
    return this.getAllLeads().filter((l) => l.stage == stage);
  }

  getAllLeads(): Lead[] {
    return [
      { id: 1, title: 'Lead 01', stage: 'New'},
      { id: 2, title: 'Lead 02', stage: 'Complete'},
      { id: 3, title: 'Lead 03', stage: 'In progress'},
      { id: 4, title: 'Lead 04', stage: 'In progress'},
      { id: 5, title: 'Lead 05', stage: 'New'},
      { id: 6, title: 'Lead 06', stage: 'Complete'},
      { id: 7, title: 'Lead 07', stage: 'New'},
      { id: 8, title: 'Lead 08', stage: 'Complete'},
      { id: 9, title: 'Lead 09', stage: 'In progress'},      
    ];
  }
}

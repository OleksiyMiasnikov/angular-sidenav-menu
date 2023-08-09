import { Injectable } from '@angular/core';
import { SideNavMenuItem } from '../model/sidenav-menu-item';
import { Lead } from '../model/lead';
import { Stage } from '../model/stage';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() { }  
  init() {
    const menuItems: SideNavMenuItem[] = [
      { icon: 'library_books', title: 'Leads', link: 'leads' },
      { icon: 'contacts', title: 'Contacts', link: 'contacts' },
      { icon: 'analytics', title: 'Analytics', link: 'analytics' },
      { icon: 'settings', title: 'Settings', link: 'settings' },
    ];
    const stages: Stage[] = [
      { id: 1, title: 'New'},
      { id: 2, title: 'In progress'},
      { id: 4, title: 'Checking' },   
      { id: 8, title: 'Complete' },
    ];
    const leads: Lead[] = [
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
    localStorage.clear;
    localStorage.setItem('menu_items', JSON.stringify(menuItems));
    localStorage.setItem('stages', JSON.stringify(stages));
    localStorage.setItem('leads', JSON.stringify(leads));
  }

  getMenuItems(): SideNavMenuItem[] {
    let result = localStorage.getItem('menu_items');    
    return (result) ? JSON.parse(result): [{ icon: 'dashboard', title: 'Kanban', link: 'kanban' }];
  }

  getStages(): Stage[] {
    let result = localStorage.getItem('stages');    
    return ((result) ? JSON.parse(result): [{ id: 1, title: 'New'}]).sort((a: Stage, b: Stage) => a.id - b.id);
  }

  getLeadsByStatus(stage: string): Lead[] {
    return this.getAllLeads().filter((l) => l.stage == stage);
  }

  updateLead(lead: Lead) {    
    let leads = this.getAllLeads();
    leads.map((l) => {
      if (l.id == lead.id) {
        // updating all fields
        l.title = lead.title;
        l.stage = lead.stage;        
        return;
      }
    });    
    localStorage.setItem('leads', JSON.stringify(leads));
  }

  getAllLeads(): Lead[] {
    let result = localStorage.getItem('leads');    
    return (result) ? JSON.parse(result): [{ id: 1, title: 'Lead 01', stage: 'New'}];
  }
}

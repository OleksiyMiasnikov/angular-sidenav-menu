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
      { id: 1, title: 'New', color: 'pink'},
      { id: 2, title: 'In progress', color: 'aqua'},
      { id: 4, title: 'Checking', color: 'green' },   
      { id: 8, title: 'Complete', color: 'lightblue' },
    ];
    const leads: Lead[] = [
      { id: 0, title: 'Lead 01', email: '1@1', stage: 'New'},
      { id: 1, title: 'Lead 02', email: '2@2', stage: 'Complete'},
      { id: 2, title: 'Lead 03', email: '3@3', stage: 'In progress'},
      { id: 3, title: 'Lead 04', email: '4@4', stage: 'In progress'},
      { id: 4, title: 'Lead 05', email: '5@5', stage: 'New'},
      { id: 5, title: 'Lead 06', email: '6@6', stage: 'Complete'},
      { id: 6, title: 'Lead 07', email: '7@7', stage: 'New'},
      { id: 7, title: 'Lead 08', email: '8@8', stage: 'Complete'},
      { id: 8, title: 'Lead 09', email: '9@9', stage: 'In progress'},      
    ];
    localStorage.clear;
    localStorage.setItem('menu_items', JSON.stringify(menuItems));
    localStorage.setItem('stages', JSON.stringify(stages));
    localStorage.setItem('leads', JSON.stringify(leads));
    localStorage.setItem('current_id', JSON.stringify(leads.length));
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

  addLead(lead: Lead) {
    let leads = this.getAllLeads();
    const currenIdStr = localStorage.getItem('current_id');
    if (currenIdStr) {
      lead.id = Number.parseInt(currenIdStr);
    } else {
      throw('Current id faild!');      
    }
    leads.push(lead);
    localStorage.setItem('leads', JSON.stringify(leads));
    localStorage.setItem('current_id', JSON.stringify(lead.id + 1));
  }

  deleteLead(lead: Lead) {
    let leads = this.getAllLeads();
    const index = leads.findIndex((l) => l.id == lead.id);
    console.log(index);
    if (index > -1) {
      leads.splice(index, 1);
    }
    localStorage.setItem('leads', JSON.stringify(leads));
  }

  updateLead(lead: Lead) {    
    let leads = this.getAllLeads();
    leads.map((l) => {
      if (l.id == lead.id) {
        // updating all fields
        l.title = lead.title;
        l.email = lead.email;
        l.stage = lead.stage;        
        return;
      }
    });    
    localStorage.setItem('leads', JSON.stringify(leads));
  }

  getAllLeads(): Lead[] {
    let result = localStorage.getItem('leads');    
    return (result) ? JSON.parse(result): [{ id: 1, title: 'Lead 01', email: '1@1', stage: 'New'}];
  }
}

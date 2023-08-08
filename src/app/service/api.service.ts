import { Injectable } from '@angular/core';
import { SideNavMenuItem } from '../model/sidenav-menu-item';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  getMenuItems(): SideNavMenuItem[] {
    return [
      { icon: 'dashboard', title: 'Dashboard', link: 'dashboard' },
      { icon: 'contacts', title: 'Contacts', link: 'contacts' },
      { icon: 'settings', title: 'Settings', link: 'settings' },
    ];
  }
}

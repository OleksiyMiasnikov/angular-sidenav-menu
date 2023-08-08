import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './component/contacts/contacts.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  // { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'settings', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

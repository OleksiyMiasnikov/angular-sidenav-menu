import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './component/contacts/contacts.component';
import { KanbanComponent } from './component/kanban/kanbancomponent';
import { SettingsComponent } from './component/settings/settings.component';
import { AnalyticsComponent } from './component/analytics/analytics.component';

const routes: Routes = [
  // { path: '', redirectTo: '/kanban', pathMatch: 'full' },
  { path: 'kanban', component: KanbanComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'analytics', component: AnalyticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

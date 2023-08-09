import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './component/contacts/contacts.component';
import { SettingsComponent } from './component/settings/settings.component';
import { AnalyticsComponent } from './component/analytics/analytics.component';
import { LeadsViewComponent } from './component/leads-view/leads-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/leads', pathMatch: 'full' },
  { path: 'leads', component: LeadsViewComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'analytics', component: AnalyticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

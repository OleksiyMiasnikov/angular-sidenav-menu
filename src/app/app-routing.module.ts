import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './component/contacts/contacts.component';
import { KanbanComponent } from './component/kanban/kanbancomponent';

const routes: Routes = [
  // { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'kanban', component: KanbanComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'settings', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './common/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidemenuComponent } from './component/sidemenu/sidemenu.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { KanbanComponent } from './component/kanban/kanbancomponent';
import { ColumnComponent } from './component/column/column.component';
import { LeadComponent } from './component/lead/lead.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    ContactsComponent,
    KanbanComponent,
    ColumnComponent,
    LeadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

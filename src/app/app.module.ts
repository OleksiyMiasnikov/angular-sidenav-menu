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
import { LeadCardComponent } from './component/lead-card/lead-card.component';
import { SettingsComponent } from './component/settings/settings.component';
import { AnalyticsComponent } from './component/analytics/analytics.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TableComponent } from './component/table/table.component';
import { LeadDetailsComponent } from './component/lead-details/lead-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColumnSettingsComponent } from './component/column-settings/column-settings.component';
import { LeadsToolbarComponent } from './component/leads-toolbar/leads-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    ContactsComponent,
    KanbanComponent,
    ColumnComponent,
    LeadCardComponent,
    SettingsComponent,
    AnalyticsComponent,    
    TableComponent,
    LeadDetailsComponent,
    ColumnSettingsComponent,
    LeadsToolbarComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

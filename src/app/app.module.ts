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
import { LeadsViewComponent } from './component/leads-view/leads-view.component';
import { TableComponent } from './component/table/table.component';
import { LeadDetailsComponent } from './component/lead-details/lead-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    LeadsViewComponent,
    TableComponent,
    LeadDetailsComponent,    
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

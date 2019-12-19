import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutesModule } from '../app/modules/modules-routing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../app/services/api.service';
import { ComponentsModule } from './components/components.module'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TodoListService } from '../app/components/to-do-list/to-do-list-service'

import { DataTablesModule } from 'angular-datatables'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpClientModule,
    ComponentsModule,
    DataTablesModule,
    FormsModule
  ],
  providers: [ApiService, TodoListService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

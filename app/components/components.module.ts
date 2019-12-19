import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables'
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


// components folder components
import { ToDoComponent } from './to-do/to-do.component'
import { ToDoListComponent } from './to-do-list/to-do-list.component'

// modules folder componnets
import { HomeComponent } from '../modules/home/home.component'
import { LoginComponent } from '../modules/login/login.component'



@NgModule({
    imports: [CommonModule, FormsModule, DataTablesModule, HttpClientModule, BrowserModule],
    declarations: [
        HomeComponent,
        LoginComponent,
        ToDoComponent,
        ToDoListComponent
    ],
})

export class ComponentsModule { }
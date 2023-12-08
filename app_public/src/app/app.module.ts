//app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { RegisterComponent } from './register/register.component';

import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { TasksTableComponent } from './tasks-table/tasks-table.component';

@NgModule({
  declarations: [
    RegisterComponent,
    TasksTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TasksTableComponent]
})
export class AppModule { }

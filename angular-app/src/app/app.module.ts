import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TasksTableComponent
    // other components
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
    // other modules
  ],
  providers: [],
  bootstrap: [TasksTableComponent]
})
export class AppModule { }

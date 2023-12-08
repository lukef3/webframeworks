import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component'; 


@NgModule({
  declarations: [
    AppComponent,
    TasksTableComponent,
    AboutComponent
    // other components
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
    // other modules
  ],
  providers: [],
  bootstrap: [AboutComponent]
})
export class AppModule { }

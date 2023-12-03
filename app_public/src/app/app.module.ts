import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [

    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RegisterComponent]
})
export class AppModule { }

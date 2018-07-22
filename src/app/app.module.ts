import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core'

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { CatsComponent } from './cats/cats.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent
  ],
  imports: [
    BrowserModule,
    MdlModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

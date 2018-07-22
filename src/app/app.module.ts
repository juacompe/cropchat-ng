import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdlModule } from '@angular-mdl/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { CatsComponent } from './cats/cats.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MdlModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

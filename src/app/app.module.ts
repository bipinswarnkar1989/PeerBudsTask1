import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }  from './app-routing.module';
import { UserRoutingModule } from './user-routing.module';


import { MyAppComponent } from './myapp.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MyAppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UserRoutingModule,
    AppRoutingModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePersonComponent } from './person/create-person/create-person.component';
import { FormsModule } from '@angular/forms';
import { ListPersonsComponent } from './person/list-persons/list-persons.component';
import { PersonComponent } from './person/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePersonComponent,
    ListPersonsComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

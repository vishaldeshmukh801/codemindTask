import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MoviesearchComponent } from './moviesearch/moviesearch.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    MoviesearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

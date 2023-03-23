import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodoListComponent} from './todo-list.component';
import { BorderDirective } from './border.directive';
import { TodoComponent } from './todo/todo.component';
import { TodoAddComponent } from './todo-add/todo-add.component'
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ApiDataService } from './api-data.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    BorderDirective,
    TodoComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ApiDataService, { dataEncapsulation: false }),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

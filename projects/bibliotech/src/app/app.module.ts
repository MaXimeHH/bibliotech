import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivreListComponent } from './livre-list.component';
import { LivreAddComponent } from './livre-add/livre-add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LivreComponent } from './livre/livre.component';
import { ApiDataService } from './api-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LivreListComponent,
    LivreAddComponent,
    LivreComponent
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

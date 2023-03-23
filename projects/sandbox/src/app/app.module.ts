import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { highLightDirective } from './highlight.directive';
import { NoopenDirective } from './no-open.directive';

@NgModule({
  declarations: [
    AppComponent,
    highLightDirective,
    NoopenDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

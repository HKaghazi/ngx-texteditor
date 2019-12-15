import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TexteditorModule } from 'texteditor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TexteditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './service/appareil.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
 
import { Routes } from '@angular/router';
 
@NgModule({
  imports:      [ BrowserModule, FormsModule  ],
  declarations: [ AppComponent, HelloComponent, AppareilComponent, AppareilViewComponent       ],
  bootstrap:    [ AppComponent ],
  providers: [AppareilService]
})
export class AppModule {}
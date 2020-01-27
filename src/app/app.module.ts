import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './service/appareil.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
 
import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
 const appRoutes: Routes=[
{path: 'appareil', component: AppareilViewComponent},
{path: 'auth', component: AuthComponent},
{}

 ]
@NgModule({
  imports:      [ BrowserModule, FormsModule  ],
  declarations: [ AppComponent, HelloComponent, AppareilComponent, AppareilViewComponent, AuthComponent       ],
  bootstrap:    [ AppComponent ],
  providers: [AppareilService]
})
export class AppModule {}
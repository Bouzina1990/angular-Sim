import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './service/appareil.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
 import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './service/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuardService } from './service/aut-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component'
 

const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuardService], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuardService], component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'edit', canActivate: [AuthGuardService], component: EditAppareilComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
 imports: [ BrowserModule,FormsModule, RouterModule.forRoot(appRoutes)],
 declarations: [ AppComponent, HelloComponent, AppareilComponent, AppareilViewComponent, AuthComponent, SingleAppareilComponent, FourOhFourComponent, EditAppareilComponent],
 bootstrap:    [ AppComponent ],
 providers: [AppareilService, AuthService, AuthGuardService]
})
export class AppModule {}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserService } from './service/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule} from '@angular/common/http';



const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuardService], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuardService], component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'edit', canActivate: [AuthGuardService], component: EditAppareilComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' } 
];

@NgModule({
 imports: [ BrowserModule,FormsModule,  ReactiveFormsModule, RouterModule.forRoot(appRoutes),  HttpClientModule  ,  NgbModule],
 declarations: [ AppComponent, HelloComponent, AppareilComponent, AppareilViewComponent, AuthComponent, SingleAppareilComponent, FourOhFourComponent, EditAppareilComponent, UserListComponent, NewUserComponent],
 bootstrap:    [ AppComponent ],
 providers: [AppareilService, AuthService, AuthGuardService, UserService]
})
export class AppModule {}
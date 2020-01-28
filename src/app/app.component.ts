import { Component , OnInit} from '@angular/core';
 import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/interval';
import { AppareilService } from './service/appareil.service';
 

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
   isAuth = false;
   seconds: number;
  appareils: any[];
  
  constructor( private appareilService : AppareilService) {
 this.isAuth = true;
 /*setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );*/
 
  }
ngOnInit(){
      
      this.appareils = this.appareilService.appareils;
        const counter = Observable.interval(1000);
        counter.subscribe(
          (value)=>{
            this.seconds=value; 
       
          },
          (error)=>{
            console.log('Uh-oh, an error occurred! : ' + error);
          },
           
           () => {
             console.log('Observable complete!');
      }
        );
        }
/* onAllumer() {
    this.appareilService.switchOnAll();
}
onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }

} */


}

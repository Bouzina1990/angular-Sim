import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  appareils: any[];
  isAuth= false;
  @Input() id: number;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
   
  });

  constructor(private appareilService: AppareilService) {

      this.isAuth=true;
   }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
    this.id=this.appareilService.id;
  }
  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

}
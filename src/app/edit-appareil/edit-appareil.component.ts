import { Component, OnInit } from '@angular/core';
import{ NgForm} from   '@angular/forms'; 
@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.css']
})
export class EditAppareilComponent implements OnInit {
  defaultOnoff='éteint';

  constructor() { }

  ngOnInit() {
  }
onSubmit(form: NgForm) {
    console.log(form.value);
}
}
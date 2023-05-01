import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {




  formUser = new FormGroup({
    'name':new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email])
  });

  name=new FormControl('', Validators.required);
  email= new FormControl('', [Validators.required, Validators.email]);





}

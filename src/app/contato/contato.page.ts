
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
 formContato: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
   this.formContato = new FormGroup ({
  texto: new FormControl(null)
   });
  }

  onSubmit() {
console.log(this.formContato)
  }

  // criarFormulario(){
 
  //   });

  }





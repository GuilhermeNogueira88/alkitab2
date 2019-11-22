import { ContatoService } from './shared/contato.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../core/shared/toast.service';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
 formContato: FormGroup;
  router: any;
  key: string;


  constructor(private formBuilder: FormBuilder,
              private contatoService: ContatoService,
              private route: ActivatedRoute,
              private toast: ToastService) { }

              ngOnInit() {
                this.criarFormulario();
              }


  onSubmit(){
    if (this.formContato.valid){
      this.contatoService.insert(this.formContato.value);
    }
    this.toast.show('Mensagem salva com sucesso');
    this.formContato.reset();
  }

  criarFormulario() {
    this.formContato = this.formBuilder.group({
      texto: ['',[Validators.required, Validators.minLength(10)]]
    });
  }

  }





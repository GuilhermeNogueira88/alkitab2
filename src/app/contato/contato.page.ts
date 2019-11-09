
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastService } from '../core/shared/toast.service';
import { ContatoService } from './contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
// formContato: FormGroup;
//   route: any;
//   key: any;

  constructor(
  // private formBuilder: FormBuilder,
  //             private toast: ToastService,
  //             private contatoService: ContatoService 
  ) { }

  ngOnInit() {
    // this.criarFormulario();
    // let key = this.route.snapshot.paramMap.get('key');
  }

  onSubmit(){
  //   // if (this.formContato.valid){
  //   //   let result: Promise<{}>;
  //   //   if (this.key){
  //   //     result = this.contatoService.update(this.formContato.value, this.key);
  //   //   } else {
  //   //     result = this.contatoService.insert(this.formContato.value);
  //     }

  //     result
  //       .then( () => {
  //         this.toast.show('Endereço salvo com sucesso');
  //         if(!this.key){
  //           this.criarFormulario();
  //         }
  //       })
  //       .catch( () => {
  //         this.toast.show('Erro ao salvar o endereço');
  //       })
  //   }
  // }

  // criarFormulario(){
  //   this.formContato = this.formBuilder.group({
  //     mensagem: ['']
  //   });
  // 
  }


}


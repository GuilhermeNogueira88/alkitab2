import { ContatoService } from './shared/contato.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../core/shared/toast.service';
import { UsuariosService } from '../usuarios/shared/usuarios.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
 formContato: FormGroup;
  router: any;
  key: string;
  user: any = {};

  constructor(private formBuilder: FormBuilder,
              private contatoService: ContatoService,
              private route: ActivatedRoute,
              private usuariosService: UsuariosService,
              private toast: ToastService,
              private afAuth: AngularFireAuth) { }

              ngOnInit() {
                this.criarFormulario();
                this.user = this.usuariosService.getDadosUsuario();

                this.formContato.patchValue({
                  usuario_nome: this.user.name,
                  usuario_email: this.user.email,
                })

              }


  onSubmit(){
    this.afAuth.auth.onAuthStateChanged(user => {
      if (!user) {
        this.toast.show('É necessário efetuar Login ou Criar uma conta !!!');
        this.router.navigate(['/login'])
      } else
    if (this.formContato.valid){
      this.contatoService.insert(this.formContato.value,);
    }
      this.toast.show('Mensagem salva com sucesso');
      this.formContato.reset();
  })
}

  criarFormulario() {
    this.formContato = this.formBuilder.group({
      texto: [''],
      usuario_nome: [''],
      usuario_email:[''],
    });
  }

  }





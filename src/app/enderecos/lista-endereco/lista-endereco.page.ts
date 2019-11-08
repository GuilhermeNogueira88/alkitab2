import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/core/shared/alert.service';
import { ToastService } from 'src/app/core/shared/toast.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EnderecosService } from '../shared/enderecos.service';

@Component({
  selector: 'app-lista-endereco',
  templateUrl: './lista-endereco.page.html',
  styleUrls: ['./lista-endereco.page.scss'],
})

export class ListaEnderecoPage implements OnInit {
  enderecos: Observable<any[]>;
  @Input()
  selecionarEndereco: boolean = false;

  constructor(private enderecoService: EnderecosService,
              private alert: AlertService,
              private toast: ToastService,
              private router: Router,
              private modalController: ModalController) { }

ngOnInit() {
this.enderecos = this.enderecoService.getAll();
}

getEnderecoText(endereco: any) {
  let enderecoText: '';
  enderecoText = endereco.logradouro;
  enderecoText += ', ' + endereco.numero;
  if (endereco.complemento) {
    enderecoText += ', ' + endereco.complemento;
  }
  enderecoText += ' - ' + endereco.bairro;
  enderecoText += ' - ' + endereco.cep;
  console.log(enderecoText);
  return enderecoText;
}

editar(key: string) {
  this.router.navigate(['/usuarios/enderecos/editar', key]);
}

remover(endereco: any) {
  this.alert.ShowConfirmaExclusao(endereco.logradouro+', '+endereco.numero, () => {
    this.enderecoService.remove(endereco.key)
      .then( () => {
        this.toast.show('Endereço removido com sucesso.!!! ');
      })
  })
}

setEnderecoSelecionado(endereco: any) {
  if (this.selecionarEndereco) {
    const enderecoText = this.getEnderecoText(endereco);
    this.modalController.dismiss({ endereco: enderecoText });
  }
}

}


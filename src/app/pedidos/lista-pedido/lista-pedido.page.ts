import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../shared/pedido.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/shared/toast.service';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.page.html',
  styleUrls: ['./lista-pedido.page.scss'],
})
export class ListaPedidoPage implements OnInit {
  pedidos: Observable<any[]>

  constructor(private pedidoService: PedidoService,
              private afAuth: AngularFireAuth,
              private router: Router,
              private toast: ToastService) { }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (!user) {
        this.toast.show('É necessário efetuar Login ou Criar uma conta !!!');
        this.router.navigate(['/login'])
      } else{
       this.pedidos = this.pedidoService.getAllAbertos();
      }
  });
}


  getStatusNome(status: number) {
    return this.pedidoService.getStatusNome(status);
  }

  getFormaPagamentoNome(formaPagamento: number) {
    return this.pedidoService.getFormaPagamentoNome(formaPagamento);
  }

  executarBusca($event: any) {
    if ($event.target.checked) {
      this.pedidos = this.pedidoService.getAll();
    } else {
      this.pedidos = this.pedidoService.getAllAbertos();
    }
  }

}


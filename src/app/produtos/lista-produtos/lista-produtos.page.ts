import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProdutosService } from '../shared/produtos.service';
import { CarrinhoService } from 'src/app/pedidos/shared/carrinho.service';
import { UsuariosService } from 'src/app/usuarios/shared/usuarios.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
})

export class ListaProdutosPage implements OnInit {
produtos: Observable<any[]>;
categorias: Observable<any[]>;
categoriaSelecionada: string;
carrinhoPossuiItens: boolean = false;
user: any = {};

constructor(private router: Router,
            private produtosService: ProdutosService,
            private carrinhoService: CarrinhoService,
            private usuarioService: UsuariosService,
            private afAuth: AngularFireAuth  ) { }

  ngOnInit() {
    this.produtos = this.produtosService.getAll();
    this.categorias = this.produtosService.getCategoriasAll();
    this.carrinhoService.carrinhoPossuiItens().subscribe( (existemItens: boolean) =>{
    this.carrinhoPossuiItens = existemItens;
    this.user = this.usuarioService.getDadosUsuario();
     });
  }

buscarProdutos() {
  this.produtos = this.produtosService.getAll(this.categoriaSelecionada);
}

adicionarProduto(produtoKey: string) {
  this.router.navigate(['pedido/carrinho/novo-item/', produtoKey]);
  }

 

  

}

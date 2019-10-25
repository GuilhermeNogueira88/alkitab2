import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProdutosService } from '../shared/produtos.service';
import { CarrinhoService } from 'src/app/pedidos/shared/carrinho.service';


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

constructor(private router: Router,
            private produtosService: ProdutosService,
            private carrinhoService: CarrinhoService   ) { }

  ngOnInit() {
    this.produtos = this.produtosService.getAll();
    this.categorias = this.produtosService.getCategoriasAll();
    // this.carrinhoService.carrinhoPossuiItens().subscribe( (existemItens: boolean) =>{
    // this.carrinhoPossuiItens = existemItens;
    // });
  }

buscarProdutos() {
  this.produtos = this.produtosService.getAll(this.categoriaSelecionada);
}

adicionarProduto(produtoKey: string) {
  this.router.navigate(['pedidos/carrinho/novo-item/', produtoKey]);
  }

}

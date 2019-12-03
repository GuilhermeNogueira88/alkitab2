import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/produtos/shared/produtos.service';
import { CarrinhoService } from '../../shared/carrinho.service';
import { ToastService } from 'src/app/core/shared/toast.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-form-item-pedido',
  templateUrl: './form-item-pedido.page.html',
  styleUrls: ['./form-item-pedido.page.scss'],
})
export class FormItemPedidoPage implements OnInit {
  produto: any = {}
  form: FormGroup;
  total: number = 0;
  

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private produtosService: ProdutosService,
              private afAuth: AngularFireAuth,
              private carrinhoService: CarrinhoService,
              private toast: ToastService
  ) { }

  ngOnInit() {
    this.criarFormulario();
    // comentário...
    let key = this.route.snapshot.paramMap.get('key');
    if (key) {
      const subscribe = this.produtosService.getByKey(key).subscribe((produto: any) => {
        subscribe.unsubscribe();
        this.produto = produto;

        this.form.patchValue({
          produtoKey: produto.key,
          produtoNome: produto.nome,
          produtoDescricao: produto.descricao,
          produtoPreco: produto.preco,
          quantidade: 1
        })
        this.executaCalcularTotal();

      })
    }

  }

  criarFormulario() {
    this.form = this.formBuilder.group({
      produtoKey: [''],
      produtoNome: [''],
      produtoDescricao: [''],
      produtoPreco: [''],
      quantidade: [''],
      observacao: [''],
      total: ['']
    })
  }

  executaCalcularTotal() {
    this.atualizaTotal(this.form.value.quantidade);
  }

  adicionarQuantidade() {
    let qtd = this.form.value.quantidade;
    qtd++;
    this.atualizaTotal(qtd);
  }



  removerQuantidade() {
    let qtd = this.form.value.quantidade;
    qtd--;
    if (qtd <= 0)
      qtd = 1;

    this.atualizaTotal(qtd);
  }

  atualizaTotal(quantidade: number) {
    this.total = this.produto.preco * quantidade;
    this.form.patchValue({ quantidade: quantidade, total: this.total });
  }

  // logar() {
  //   this.afAuth.auth.onAuthStateChanged(user => {
  //     if (!user) {
  //       this.router.navigate(['/login'])
  //     } else {
  //       this.router.navigate(['/perfil']);
  //     }
  //   })

  // }


  onSubmit() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (!user) {
        this.toast.show('É necessário efetuar Login ou Criar uma conta !!!');
        this.router.navigate(['/login'])
      } else {
        if (this.form.valid) {
          this.carrinhoService.insert(this.form.value)
            .then(() => {
              this.toast.show('Produto adicionado com sucesso !!!');
              this.router.navigate(['/tabs/produtos']);
            });
        }
      }
    });
  }

}


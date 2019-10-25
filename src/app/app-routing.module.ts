import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'form-endereco', loadChildren: './enderecos/form-endereco/form-endereco.module#FormEnderecoPageModule' },
  { path: 'lista-endereco', loadChildren: './enderecos/lista-endereco/lista-endereco.module#ListaEnderecoPageModule' },
  { path: 'form-item-pedido', loadChildren: './pedidos/form-item-pedido/form-item-pedido/form-item-pedido.module#FormItemPedidoPageModule' },
  { path: 'lista-item-pedido', loadChildren: './pedidos/lista-item-pedido/lista-item-pedido.module#ListaItemPedidoPageModule' },
  { path: 'lista-produto-pedido', loadChildren: './pedidos/lista-produto-pedido/lista-produto-pedido.module#ListaProdutoPedidoPageModule' },
  { path: 'lista-produtos', loadChildren: './produtos/lista-produtos/lista-produtos.module#ListaProdutosPageModule' },
  { path: 'criar-conta', loadChildren: './usuarios/criar-conta/criar-conta.module#CriarContaPageModule' },
  { path: 'esqueci-senha', loadChildren: './usuarios/esqueci-senha/esqueci-senha.module#EsqueciSenhaPageModule' },
  { path: 'login', loadChildren: './usuarios/login/login.module#LoginPageModule' },
  { path: 'perfil', loadChildren: './usuarios/perfil/perfil.module#PerfilPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

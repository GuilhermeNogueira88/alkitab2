import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './usuarios/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule'
    // canActivate: [AuthGuard]
  },
  { path: 'produtos', loadChildren: './produtos/lista-produtos/lista-produtos.module#ListaProdutosPageModule'},
  { path: 'criar-conta', loadChildren: './usuarios/criar-conta/criar-conta.module#CriarContaPageModule' },
  { path: 'esqueci-senha', loadChildren: './usuarios/esqueci-senha/esqueci-senha.module#EsqueciSenhaPageModule' },
  { path: 'login', loadChildren: './usuarios/login/login.module#LoginPageModule' },
  { path: 'perfil', loadChildren: './usuarios/perfil/perfil.module#PerfilPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'form-pagamento', loadChildren: './pedidos/form-pagamento/form-pagamento.module#FormPagamentoPageModule' },
  { path: 'lista-pedido', loadChildren: './pedidos/lista-pedido/lista-pedido.module#ListaPedidoPageModule' },
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

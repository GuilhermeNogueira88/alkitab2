import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ValorComponent } from '../../share/valor/valor/valor.component';
import { ListaEnderecoPage } from 'src/app/enderecos/lista-endereco/lista-endereco.page';

@NgModule({
    declarations: [ValorComponent, ListaEnderecoPage],
    imports: [
      CommonModule,
      IonicModule,
      RouterModule,
      ReactiveFormsModule
    ],
    exports: [
      ValorComponent,
      CommonModule,
      IonicModule,
      RouterModule,
      ReactiveFormsModule,
      ListaEnderecoPage
    ],
    entryComponents: [ValorComponent, ListaEnderecoPage]
  })
  export class SharedModule { }
  
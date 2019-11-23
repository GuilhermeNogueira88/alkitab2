import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { FirebasePath } from 'src/app/core/shared/firebase-path';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private afAuth: AngularFireAuth;

  constructor(private db: AngularFireDatabase) { }

  getAll(categoriaKey: string = null) {
    return this.db.list(FirebasePath.PRODUTOS, q => {
    if (categoriaKey) {
     return q.orderByChild('categoriaKey').equalTo(categoriaKey);
    } else {
      return q.orderByChild('nome');
    }
    }).snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val() }));
      }
        )
    );


  }

  // // metodo criado para trazer do do banco o nome do usuario
  // getDadosUsuario(){
  //   const user = { name: ''};
  //   if (this.afAuth.auth.currentUser) {
  //     user.name = this.afAuth.auth.currentUser.displayName;
  //   }

  //   return user;
  // }

  getCategoriasAll() {
    return this.db.list(FirebasePath.CATEGORIAS).snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val() }));
           })
    );
     }


    // buscar  produto por uma key//
    // ela pega o path = "/produtos" e concactena com a key//
    // exemplo "/produtos" + "15n64n13s4ng65s"
    // "/produtos/15n64n13s4ng65s"//
     getByKey(key: string) {
       const path = `${FirebasePath.PRODUTOS}${key}`;
       return this.db.object(path).snapshotChanges().pipe(
         map(change => {
           return ({ key: change.key, ...change.payload.val() });
         })
       );
     }
}

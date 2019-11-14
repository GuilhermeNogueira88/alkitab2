import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebasePath } from 'src/app/core/shared/firebase-path';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth) {}


getContatosPath() {
  const path = `${FirebasePath.CONTATO}${this.afAuth.auth.currentUser.uid}`
  return path;
}

insert(contato: any) {
  const path = this.getContatosPath();
  return  this.db.list(path).push(contato);
}




getContatosRef() {
  const path = this.getContatosPath();
  return this.db.list(path);
}
}
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth) { }
}

// insert(mensagem: any){
//   return this.save(mensagem, null);
// }
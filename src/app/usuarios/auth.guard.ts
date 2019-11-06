import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastService } from '../core/shared/toast.service';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
  
    constructor(private router: Router, private afAuth: AngularFireAuth, private toast: ToastService) {}
  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.afAuth.user.pipe(
        take(1),
        map(user => !!user),
        tap(usuarioLogado => {
          if (!usuarioLogado) {
            this.toast.show('É necessário efetuar Login primeiro ou Criar uma Conta');
            this.router.navigate(['/login']);
          }
        })
      )
    }
  
  }
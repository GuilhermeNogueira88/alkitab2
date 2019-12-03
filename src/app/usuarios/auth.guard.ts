import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {


    constructor( private authService: AuthService,
                 private router: Router ) { }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.authService.getAuth().onAuthStateChanged(user => {
        if (!user) {this.router.navigate(['login']); }
        resolve(user ? true : false);
      });
    });
  }
  

    // constructor(private router: Router, private afAuth: AngularFireAuth, private toast: ToastService) {}
  
    // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    //   return this.afAuth.user.pipe(
    //     take(1),
    //     map(user => !!user),
    //     tap(usuarioLogado => {
    //       if (!usuarioLogado) {
    //         this.toast.show('É necessário efetuar Login primeiro ou Criar uma Conta');
    //         this.router.navigate(['/login']);
    //       }
    //     })
    //   )
    // }
  
  }
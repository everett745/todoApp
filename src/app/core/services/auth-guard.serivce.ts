import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {ToastrService} from 'ngx-toastr';

@Injectable({providedIn: 'root'})

export class AuthGuardSerivce implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated()) {
      return true
    } else {
      this.authService.logout();
      this.toastr.error("Необходима авторизация");
      this.router.navigate(['/home']);
    }
  }
}

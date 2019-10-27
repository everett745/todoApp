import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {User, AuthResponse} from '../models';
import {environment} from '../../../environments/environment';


@Injectable({providedIn: 'root'})

export class AuthService {

  get token(): string {
    return localStorage.getItem('token')
  }
  get User() {
    if (localStorage.getItem('token') == null){
      return ''
    } else {
      return localStorage.getItem('username');
    }
  }
  get Time() {
    return localStorage.getItem('authTime');
  }

  constructor(private http: HttpClient,
              private toastr: ToastrService){}



  login(user: User, path?: string): Observable<any> {
    return this.http.post(`${environment.apiKey}/${path}`, {user})
      .pipe(
        tap(this.setLocalStorage),
        catchError(error => {
          this.toastr.error("Email or password : " + error.error.errors['email or password'], 'Error');
          return throwError(error);
        })
      )
  }

  logout() {
    this.setLocalStorage(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setLocalStorage(response: AuthResponse | null) {
    if (response) {
      localStorage.setItem('token', response.user.token);
      localStorage.setItem('username', response.user.username);
      localStorage.setItem('authTime', new Date().toString());
    } else {
      localStorage.clear();
    }
  }
}

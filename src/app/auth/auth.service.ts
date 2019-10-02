import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../core/models';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({providedIn: 'root'})

export class AuthService{
  mainUser: User = {
    username: '',
  };

  constructor(private http: HttpClient){}

  registrate(user: User): Observable<any> {
    return this.http.post('https://conduit.productionready.io/api/users', {user})
      .pipe(
        catchError(error => {
          alert("Ошибка регистрации:  " + error.message);
          return throwError(error);
        })
      )
  }

  login(user: User):Observable<any> {
    return this.http.post('https://conduit.productionready.io/api/users/login', {user})
      .pipe(
        catchError(error => {
          alert("Ошибка входа:  " + error.message);
          return throwError(error);
        })
      )
  }

  logout() {
    this.mainUser = {
      username: '',
    };
  }
}

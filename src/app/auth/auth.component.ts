import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from './auth.service';
import {User} from '../core/models';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit{

  @Output() userObj = new EventEmitter<User>();

  authType: string;
  login: boolean;
  register: boolean;
  public MainUser: User;

  username: string;
  email: string;
  password: string;

  constructor(private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;
    });
    if (this.authType === 'register') {
      this.register = true;
      this.login = false;
    } else if (this.authType === 'login') {
      this.register = false;
      this.login = true;
    }
  }

  submitForm() {
    if (this.authType === 'register') {
      this.authService.registrate({
          username: this.username,
          email: this.email,
          password: this.password
      })
        .subscribe( user => {
          console.log('regist: ', user);
          this.MainUser = user.user;
          this.authService.mainUser = user.user;
        });

      this.userObj.emit(this.MainUser);

    } else if (this.authType === 'login') {
      this.authService.login({
        username: this.username,
        email: this.email,
        password: this.password
      })
        .subscribe( user => {
          console.log('login: ', user);
          this.MainUser = user.user;
          this.authService.mainUser = user.user;
        });

      this.userObj.emit(this.MainUser);
    }
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../core/services';
import {ToastrService} from 'ngx-toastr';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../core/models';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit{

  @Output() userObj = new EventEmitter<User>();

  authType: string;
  loaded = false;

  singUpForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public authService: AuthService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.authType = this.route.snapshot.url[0].path.toUpperCase();
    });

    this.singUpForm = new FormGroup({
      email: new FormControl('kir@polik.comr', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('AsdDsa123', [
        Validators.required
      ])
    });
  }

  submitForm() {
    if (this.singUpForm.invalid) {
      return;
    }

    this.loaded = true;

    let data = {
      username: String(this.singUpForm.get('email')).substr(0, 5),
      email: String(this.singUpForm.get('email').value),
      password: String(this.singUpForm.get('password').value)
    };

    this.authService.login(data, this.route.snapshot.url[0].path).subscribe( user => {
        this.singUpForm.reset();
        this.router.navigate(['home']);
        this.toastr.success("Успешная авторизация");
        this.loaded = false;
      }, () => {
        this.loaded = false;
      });
  }
}

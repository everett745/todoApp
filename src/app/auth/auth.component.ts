import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

export interface Errors {
  errors: {[key: string]: string};
}

@Component({
  selector: 'app-footer',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{

  authType: string;
  login: boolean;
  errors: Errors = {errors: {}};
  isSubmitting = false;

  username: string;
  email: string;
  password: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;
    });
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = {errors: {}};

  }
}

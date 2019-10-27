import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./footer-header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() openSideNav: boolean;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import {
  faPercent,
  faRotateLeft,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css'],
})
export class AccountLoginComponent implements OnInit {
  constructor() {}
  faPercent = faPercent;
  faRotateLeft = faRotateLeft;
  faBookOpen = faBookOpen;
  ngOnInit(): void {}
}

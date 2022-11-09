import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-menu',
  templateUrl: './btn-menu.component.html',
  styleUrls: ['./btn-menu.component.css'],
})
export class BtnMenuComponent implements OnInit {
  constructor() {}
  @Input() href: string = '/checkout';
  @Input() text: string = 'btn schopping';
  @Input() disableStatus: number = 0;
  @Output() btnClick = new EventEmitter();
  ngOnInit(): void {}
  onClick() {
    this.btnClick.emit();
  }
}

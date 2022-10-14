import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn-shopping',
  templateUrl: './btn-shopping.component.html',
  styleUrls: ['./btn-shopping.component.css'],
})
export class BtnShoppingComponent implements OnInit {
  constructor() {}
  @Input() backgroundColor: string = '';
  @Input() text: string = 'btn schopping';
  @Input() color: string = 'black';
  ngOnInit(): void {}
}

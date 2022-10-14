import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnShoppingComponent } from './btn-shopping.component';

describe('BtnShoppingComponent', () => {
  let component: BtnShoppingComponent;
  let fixture: ComponentFixture<BtnShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnShoppingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

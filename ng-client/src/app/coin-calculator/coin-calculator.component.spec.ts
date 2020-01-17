import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinCalculatorComponent } from './coin-calculator.component';

describe('CoinCalculatorComponent', () => {
  let component: CoinCalculatorComponent;
  let fixture: ComponentFixture<CoinCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

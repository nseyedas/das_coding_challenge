import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-coin-calculator',
  templateUrl: './coin-calculator.component.html',
  styleUrls: ['./coin-calculator.component.scss']
})
export class CoinCalculatorComponent implements OnInit {

  coins: [];

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
  }

  calculateOptimalCoins(amount: number) {
//
  }
}

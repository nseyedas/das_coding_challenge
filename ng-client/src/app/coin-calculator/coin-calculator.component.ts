import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-coin-calculator',
  templateUrl: './coin-calculator.component.html',
  styleUrls: ['./coin-calculator.component.scss']
})
export class CoinCalculatorComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  calculateOptimalCoins(amount: number) {
    return this.http.get('localhost:5000/calculator')
  }
}

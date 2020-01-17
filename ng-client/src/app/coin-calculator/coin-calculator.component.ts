import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-coin-calculator',
  templateUrl: './coin-calculator.component.html',
  styleUrls: ['./coin-calculator.component.scss']
})
export class CoinCalculatorComponent implements OnInit {

  public amount :number;
  public result :any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  calculateOptimalCoins(amount: number) {
    this.amount = amount;
    let url = 'http://localhost:5000/calculator?amount=' + this.amount;
    this.http.get(url).subscribe(response => {this.result = response;})
  }
}

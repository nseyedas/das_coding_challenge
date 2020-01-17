import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) { }

  getOptimalCoinCount(amount :number) {
    return this.http.get('/url', {
      params: {
        appid: 'id1234',
        cnt: '5'
      },
      observe: 'response'
    })
    .toPromise()
    .then(response => {
      console.log(response);
    })
    .catch(console.log);
  }
}

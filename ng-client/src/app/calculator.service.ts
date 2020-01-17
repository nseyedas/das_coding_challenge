import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http:HttpClient) {}
 
  // Uses http.get() to load data from a single API endpoint
  
  getCoins() {
   this.http.get('localhost:5000/calculator?{{amount}}');
  }

}

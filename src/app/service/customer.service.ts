import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const BASIC_URL = ["http://localhost:9000/"]

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  postCustomer(customer: any): Observable<any> {
    return this.http.post(BASIC_URL + "api/customer", customer);
  }


}

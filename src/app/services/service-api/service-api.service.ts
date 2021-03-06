
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(
    public http: HttpClient
  ) { }
  private authorizationHeader() {
    // console.log(token);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return headers;
  }

  saveUser(body) {
    return this.http.post('https://rabu-authen.herokuapp.com/api/auth/signin', body, { headers: this.authorizationHeader() }).toPromise()
  }

  sigup(body) {
    return this.http.post('https://rabu-authen.herokuapp.com/api/auth/signup', body, { headers: this.authorizationHeader() }).toPromise()

  }

  getProd() {
    return this.http.get('https://rabu-product-service.herokuapp.com/api/productsrabu',{ headers: this.authorizationHeader() }).toPromise()
  }

  getProdById(_id) {
    return this.http.get('https://rabu-product-service.herokuapp.com/api/productsrabu/' + _id,{ headers: this.authorizationHeader() }).toPromise()
  }

















}

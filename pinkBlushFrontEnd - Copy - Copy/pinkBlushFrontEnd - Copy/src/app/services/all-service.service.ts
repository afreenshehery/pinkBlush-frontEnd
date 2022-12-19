import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { Subject } from 'rxjs';
import { BlushComponent } from '../blush/blush.component';
import { CartComponent } from '../cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {
  getAllcartItem: any = []
  url = environment.url


  headerClicked = new Subject<BlushComponent>();
  plusClicked = new Subject<CartComponent>();


  constructor(private http: HttpClient, private router: Router) { }

  getHeader(): HttpHeaders {
    let headers = new HttpHeaders({
      token: localStorage.getItem('token') || ''
    });
    return headers;
  }
  saveAuthData(token:string,id:string,status:any) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('status',status);
  }

  signup(signup: any) {
    return this.http.post<{token:any,id:any}>(`${this.url}/signup`, signup)
  }

  login(loginData: any) {
    return this.http.post<{ token: string,id:any,status:any }>(`${this.url}/login`, loginData, {
      headers: this.getHeader(),
    })
  }

  uploadProducts(uploaddata: any) {
    return this.http.post<{}>(`${this.url}/uploadProducts`, uploaddata)
  }

  getAllProducts() {
    return this.http.get<{ products: any }>(`${this.url}/getAllProducts`)
  }

  getAllBlush(data:any) {
    return this.http.post<{ length: number; Blush: any,alldata:any}>(`${this.url}/getAllBlush`,data)
  }
  postToCart(createdCart: any) {
    // console.log(createdCart)
    return this.http.post<{data:any}>(`${this.url}/postToCart`, createdCart, {
      headers: this.getHeader(),
    })
  }
  getItemsToCart(idObj:any,) {
    return this.http.post<{ qty: any, cartitem: any}>(`${this.url}/getItemsToCart` , idObj) 
  }

  getItemCount(customerid:any,) {
    return this.http.post<{cartitem: any}>(`${this.url}/getItemCount` , customerid) 
  }




  ordered(order:any){
    return this.http.post(`${this.url}/placeorder`, order,{
      headers: this.getHeader(),
    })

  }
  // getfilter(filterName:any,filterPrice:any){
  //   console.log(filterName)
  //   return this.http.post(`${this.url}/getfilter` ,filterName,filterPrice ) 
  // }
    getfilter(all:any){
    console.log(all)
    return this.http.post<{data:any}>(`${this.url}/getfilter` ,all ) 
  }
getmyorder(customerId:any){
  return this.http.post<{myorders:any,myordersfromcart:any,orderfromcart:any,ordersfromorder:any,itemsfromcart:any}>(`${this.url}/getmyorder/` , customerId)
}
  deleteProduct(id: any) {
    return this.http.delete(`${this.url}/deleteCartItem/` + id)
  }
  deleteorder(customerId: any) {
    return this.http.delete<{myorders:any}>(`${this.url}/deletefromCart/` + customerId)
  }

  getusercountforchart(){
    return this.http.get<{usercountbefore:any,usercountafter:any,usercount:any,todayuser:any,currentmonth:any}>(`${this.url}/getusercountforchart`)
  }





}

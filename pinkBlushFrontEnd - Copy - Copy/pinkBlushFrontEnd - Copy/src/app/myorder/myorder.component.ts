import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllServiceService } from '../services/all-service.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {
  CustomerId:any
  status:any
  myorder:any=[]
  myordersfromcart:any=[]
  constructor(private allservice: AllServiceService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.CustomerId=localStorage.getItem('id')
    let data={
      customerid:this.CustomerId,
    }
this.allservice.getmyorder(data).subscribe((response)=>{
  console.log(response.myorders)
  console.log(response.myordersfromcart)
  this.myordersfromcart = response.myordersfromcart
   this.myorder = response.myorders
  //  this.myordersfromcart = response.myordersfromcart
  //  console.log( response.myordersfromcart);
   
  // console.log(this.myorder)

// this.allservice.getItemsToCart(data).subscribe((response)=>{
//   console.log(response.cartitem)

// })


})
  }

}

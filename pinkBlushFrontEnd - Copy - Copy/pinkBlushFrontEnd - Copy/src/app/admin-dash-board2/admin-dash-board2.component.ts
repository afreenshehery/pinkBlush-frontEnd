import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../services/all-service.service';

@Component({
  selector: 'app-admin-dash-board2',
  templateUrl: './admin-dash-board2.component.html',
  styleUrls: ['./admin-dash-board2.component.css']
})
export class AdminDashBoard2Component implements OnInit {

  customerid:any
  status:any
  order:any
  cart:any
  itemid:any
  constructor(private allservice:AllServiceService)  { }

  ngOnInit(): void {
this.customerid = localStorage.getItem('id')
this.status=localStorage.getItem('status')
console.log(this.status,"this is status")

let data={
  customerid:this.customerid,
  status:this.status
}
    this.allservice.getmyorder(data)
      .subscribe((response)=>{
        console.log(response)
        this.order = response.ordersfromorder
        // this.cart = response.orderfromcart
      
      });

  }

}

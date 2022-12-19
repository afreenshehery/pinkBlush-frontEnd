import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../services/all-service.service';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {
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


  onclick(id:any){
    console.log(id);
    this.itemid = id
    console.log(this.itemid)
    let itemidd={
      itemId :this.itemid
    }
    console.log(itemidd);
    
this.allservice.getmyorder(itemidd).subscribe((response)=>{
  console.log(response.itemsfromcart)
  this.cart=[]
  this.cart=response.itemsfromcart
  console.log(this.cart);
  

})
    
  }




}

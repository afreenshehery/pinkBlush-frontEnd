import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../services/all-service.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

  cart:any=[]
  total:number=0;
  constructor(private allservice:AllServiceService)  { }

  ngOnInit(): void {
    // this.allservice.getItemsToCart().subscribe(
    //   (response) => {
    //     console.log(response.cartitem)
    //     this.cart=response.cartitem 
    //     this.cart.forEach(
    //       (el: { price: any }) => (this.total = el.price + this.total)
    //     );
    //   },(error) =>{
    //     // alert('ERRORRRRRR')
    //   }
    // )
   

  }
  fetchCart() {
   
  }

}

import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../services/all-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart:any=[]
total:number=0;
customerId:any
userid:any
show=false;
hide=true;


grandtotal:number=0;
  constructor(private allservice:AllServiceService)  { }

  ngOnInit(): void {
    this.customerId =localStorage.getItem('id')
    this.fetchCart()

  
  }
  fetchCart() {
 

    let data={
      costomerId:localStorage.getItem('id')
    }

    console.log(data);
    
    this.allservice.getItemsToCart(data).subscribe(
      (response) => {
        console.log (response.qty)
        // let array = response.cartitem
        // let element=[]
        //   for (let index = 0; index < array.length; index++) {
        //    element.push(array[index].quantity);
        //   }
        //   const initialValue = 0;
        //   const sumWithInitial = element.reduce(
        //     (previousValue, currentValue) => previousValue + currentValue,
        //     initialValue
        //   );
  
          let storecartcount =localStorage.setItem('count',response.qty) 
          
        //   console.log(sumWithInitial);

          this.allservice.headerClicked.next(response.qty)
     
        console.log(response)
        this.cart=response.cartitem 
        this.total=0
        this.cart.forEach(
          (el: { price: any }) => (this.total = el.price + this.total)
        );
        console.log(this.total)
        this.grandtotal=this.total+100
        
      },(error) =>{
        // alert('ERRORRRRRR')
      }
    )
  }
  placeorder(){
    this.show=true
    this.hide=false

  }


  // let arr: any[] = [];
  // this.mobile.forEach((el: { productName: any }) => arr.push(el.productName));
  // console.log(arr);
  // let sendData = {
  //   products: arr,
  //   total: this.total,
  // };

  ordered(){
   
    // let array:any=[]
    // this.cart.forEach((el: { name: any }) => array.push(el.name));
    // console.log(array)
    let order={
      // name:array,
      // orderid:, 
      customerid:this.customerId,
      total:this.total,
      Date:Date.now()
      // status:ordered
    }
    console.log(order)
    this.allservice.ordered(order).subscribe((response)=>{
      console.log(response)
      // this.deleteCart(this.customerId)
   
      
  

    })
    
  }


  onDelete(id: string) {
    this.allservice.deleteProduct(id)
      .subscribe(() => {
        alert('Deleted!');
        this.fetchCart()
        this.total=0
      });
  }

  plus(item: any) {
    console.log(item.productId);

    let createData = {
      productId: item.productId,
      string:"add",
      cosomerId:localStorage.getItem('id')
    };
    this.allservice.getItemsToCart(createData).subscribe((response) => {
      console.log(response.cartitem)
      this.total;
      this.fetchCart()
      let array = response.cartitem
      let element=[]
        for (let index = 0; index < array.length; index++) {
         element.push(array[index].quantity);
        
         
        }
       
        const initialValue = 0;
        const sumWithInitial = element.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          initialValue
        );

        // let storecartcount =localStorage.setItem('count',sumWithInitial) 
        
        console.log(sumWithInitial);
      
      
        this.allservice.headerClicked.next(sumWithInitial)
      
      
    });
  }


  minus(item: any) {
    console.log(item.productId);

    let createData = {
      productId: item.productId,
      string:"remove",
      cosomerId:localStorage.getItem('id')

    };
    this.allservice.getItemsToCart(createData).subscribe((response) => {
      console.log(response)
      this.total;
      this.fetchCart()

      let array = response.cartitem
      let element=[]
        for (let index = 0; index < array.length; index++) {
         element.push(array[index].quantity);
        
         
        }
       
        const initialValue = 0;
        const sumWithInitial = element.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          initialValue
        );
        
        console.log(sumWithInitial);
      
        // let storecartcount =localStorage.setItem('count',sumWithInitial) 
        this.allservice.headerClicked.next(sumWithInitial)
    });
  }

}

import { Component, HostListener, OnInit } from '@angular/core';
import { AllServiceService } from '../services/all-service.service';

@Component({
  selector: 'app-blush',
  templateUrl: './blush.component.html',
  styleUrls: ['./blush.component.css']
})
export class BlushComponent implements OnInit {

  getCart:any=[]
  blush:any=[]
  CustomerId:any
  value:any
  value1:any
  name:any
  searchText:any
  totalitem:number=0

  constructor(private allservice:AllServiceService)  { }
    ngOnInit(): void {
      this.CustomerId=localStorage.getItem('id')
      this.fetchProduct()
      
      // this.allservice.getItemsToCart(this.CustomerId).subscribe((res)=>{
      //     console.log(res.cartitem.length)
      //     this.totalitem = res.cartitem.length
      //       })
    }
    fetchProduct() {
    let data={
    search:this.searchText
    }
      this.allservice.getAllBlush(data).subscribe(
        (response) => {
          console.log(response.Blush)
          // console.log(response.alldata)
          this.blush = []
          if(response.alldata){
          this.blush=response.alldata
          }if(response.Blush){
            this.blush=response.Blush
            }
        },(error) =>{
          // alert('ERRORRRRRR')
        }
      )
    }
    
addToCart(item:any){
console.log(item);    
 let createdCart = {
  productId:item.productId,
 }
 console.log(createdCart)
 this.allservice.postToCart(createdCart).subscribe((response)=>{
  console.log(response.data)


//   let array = response.data
// let element=[]
//   for (let index = 0; index < array.length; index++) {
//    element.push(array[index].quantity);
    
//   }
 
//   const initialValue = 0;
//   const sumWithInitial = element.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     initialValue
//   );
  
//   console.log(sumWithInitial);


  this.allservice.headerClicked.next(response.data)

 })
    }
    getSearch(value: any) {
      this.searchText = value;
      this.fetchProduct()
      console.log(this.searchText);
    }
    onSelectedBrand(item:any){
      this.value=item
      console.log(this.value)
      this.onSelected()
    }
    onSelectedPrice(item1:any){
     this.value1= item1 
     console.log(this.value1)
     this.onSelected()
    }
    onSelected(){
      let all={
        name:this.value,
        price:this.value1
      }
      console.log(all)
      this.allservice.getfilter(all).subscribe((response)=>{
      console.log(response)
      this.blush=response.data
    })
    }
}






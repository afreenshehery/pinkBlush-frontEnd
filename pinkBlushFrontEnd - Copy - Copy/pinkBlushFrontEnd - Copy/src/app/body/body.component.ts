import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../services/all-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  name:any
  products:any=[]
  constructor(private allservice:AllServiceService)  { }
  
    ngOnInit(): void {
      this.fetchProduct()
    }
    fetchProduct() {
      this.allservice.getAllProducts().subscribe(
        (response) => {
          console.log(response.products)
          this.products=response.products
    
        },(error) =>{
          alert('ERRORRRRRR')
        }
      )
    }
   

}

import { Component, OnInit, HostListener } from '@angular/core';
import { AllServiceService } from '../services/all-service.service';
import { BlushComponent } from '../blush/blush.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
menuVariable:boolean=false;
menu_icon_variable:boolean=false;

totalitems:any=0

openMenu(){
  this.menuVariable= true;
  this.menu_icon_variable=true;
}



constructor(private allservice:AllServiceService) {
  allservice.headerClicked.subscribe((product: BlushComponent) => {
    console.log(product, 'hello');

    this.totalitems = product;
  });
}

 

    ngOnInit(): void {

this.totalitems
let storecartcount =localStorage.getItem('count') 
this.totalitems=storecartcount
    }  
  
}



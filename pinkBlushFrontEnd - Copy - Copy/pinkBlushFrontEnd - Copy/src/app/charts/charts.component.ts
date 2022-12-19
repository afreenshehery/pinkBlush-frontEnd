import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../services/all-service.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  data:any
  data1:any
  data2:any
  newdata1:any
  newdata2:any
  newdata3:any
  todayuser:any
  currentmonth:any
value:any
  constructor(private allservice:AllServiceService) { }


  ngOnInit(): void {

this.fetch()


  }


fetch(){
  this.allservice.getusercountforchart().subscribe((response)=>{
    console.log(response.usercountbefore)
    this.newdata1=response.usercountbefore,
    this.newdata2=response.usercountafter
    this.newdata3=response.usercount,
    this.todayuser=response.todayuser  
    this.currentmonth=response.currentmonth
    console.log(this.currentmonth)

  
    this.data = {
      labels: ['2017 ', '2018', '2019', '2020', '2021', '2022', ],
      datasets: [
        {
          label: 'User Progress',
          backgroundColor: '#f87979',
          data: [0, 0, 0,0,0,this.newdata1 ]
        }
      ]
    };
  
    this.data1 = {
      // labels: ['1hr','2hr','3hr','4hr','5hr','6hr','7hr','8hr','9hr','10hr','11hr','12hr'],
      labels: ['today'],
      datasets: [
        {
          label: 'User Progress',
          backgroundColor: '#f87979',
          data: [this.todayuser]
        }
      ]
    };

    this.data2 = {
      labels: ['jan ', 'feb', 'mar', 'apr', 'may', 'jun', 'july','aug','sept','oct','nov','dec'],
      datasets: [
        {
          label: 'User Progress',
          backgroundColor: '#f87979',
          data: [0, 0, 0,0,0,0,0,0,4,this.currentmonth,0,0]
        }
      ]
    };
  
  })
}
  onSelected(item: any) {
    this.value = item;
    console.log(this.value)
  }
}

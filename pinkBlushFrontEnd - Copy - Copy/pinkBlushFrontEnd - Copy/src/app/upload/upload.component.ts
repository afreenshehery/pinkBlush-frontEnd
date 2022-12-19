import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllServiceService } from '../services/all-service.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  files:any

  constructor(private allservice:AllServiceService)  {}
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.files = file;
    }
  }
  onupload(form: NgForm){
   
    if (form.invalid) {
      return;
    }
    const data = new FormData();
    data.append('file', this.files);

    const uploaddata = {
      name: form.value.name,
    };
    data.append('body', JSON.stringify(uploaddata));
    {
      this.allservice.uploadProducts(data).subscribe(
        (response) => {
          console.log(response)
          alert('product list created')
    
        },(error) =>{
          alert('ERRORRRRRR')
        }
      )
    }
    console.log(data);
  } 
 
       
 
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllServiceService } from '../services/all-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private allservice:AllServiceService)  { }
  signup(form:NgForm){
    const signup = {
      name: form.value.name,
      contact: form.value.contact,
      email: form.value.email,
      password: form.value.password,
     
    };
    this.allservice.signup(signup).subscribe(
      (response) => {
        console.log(response)
        let token = response.token
        let id= response.id
          alert("registered successfully")
              this.allservice.saveAuthData(token,id,status);
        },
      // (error): void => {
      //   alert('error in registration');
      // }
    )
    form.reset({});
      }

  ngOnInit(): void {
  }

}

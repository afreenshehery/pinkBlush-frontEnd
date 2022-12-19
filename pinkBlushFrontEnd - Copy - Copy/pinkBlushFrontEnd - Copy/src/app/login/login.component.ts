import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AllServiceService } from '../services/all-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private allservice: AllServiceService, private router: Router, private http: HttpClient) { }

  login(form: NgForm) {
    const loginData = {
      email: form.value.email,
      password: form.value.password,
    };
    this.allservice.login(loginData).subscribe(
      (response) => {
        console.log(response)
       let status= response.status
       console.log(status)
        const token = response.token;
        console.log(token)
        const id = response.id
        console.log(id)
        if (token) {
          alert('Login Successfull!');
          // this.id = null
          this.allservice.saveAuthData(token,id,status);
          this.router.navigate(['Blush']);

        }
        if(status === 1){
          this.router.navigate(['adminDashBoard2']);
        }

        if (!token) {
          alert('error')
        }
      },
      (error) => {
        console.log(error);
        alert('oops something went wrong');
      }
    );
    form.reset({});
  }

  ngOnInit(): void {
  }

}

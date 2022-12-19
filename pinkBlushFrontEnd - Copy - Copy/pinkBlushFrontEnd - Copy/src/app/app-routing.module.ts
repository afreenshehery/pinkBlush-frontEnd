import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { BlushComponent } from './blush/blush.component';
import { BodyComponent } from './body/body.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MyorderComponent } from './myorder/myorder.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { SignupComponent } from './signup/signup.component';
import { UploadComponent } from './upload/upload.component';
import { AdminDashBoard2Component } from './admin-dash-board2/admin-dash-board2.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [

  {path:'',component:BodyComponent},
  {path:'Blush',component:BlushComponent},
  {path:'cart',component:CartComponent},
  {path:'upload',component:UploadComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'placeorder',component:PlaceorderComponent},
  {path:'myorder',component:MyorderComponent},
  {path:'adminDashBoard',component:AdminDashBoardComponent},
  {path:'adminDashBoard2',component:AdminDashBoard2Component},
  {path:'charts',component:ChartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

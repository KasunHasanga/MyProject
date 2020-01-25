import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContacUsComponent } from './contac-us/contac-us.component';


const routes: Routes = [
  {path:'',component:ContacUsComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

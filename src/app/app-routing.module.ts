import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SignINComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'about', component: AboutComponent },
  { path : 'log-in', component: SignINComponent },
  { path : 'register', component: RegisterComponent },
  { path : 'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

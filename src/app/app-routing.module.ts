import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SignINComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'about', component: AboutComponent },
  { path : 'log-in', component: SignINComponent },
  { path : 'register', component: RegisterComponent },
  { path : 'products', component: ProductsComponent },
  { path : 'product/:id', component: ProductComponent },

];
RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

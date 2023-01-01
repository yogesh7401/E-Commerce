import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SignINComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { BannerComponent } from './banner/banner.component';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductComponent } from './product/product.component';
import { ProductCardSkeletonComponent } from './product-card-skeleton/product-card-skeleton.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SignINComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    BannerComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductComponent,
    ProductCardSkeletonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

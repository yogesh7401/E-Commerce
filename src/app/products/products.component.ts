import { Component, OnInit } from '@angular/core';
import { Product } from 'src/types/products';
import { ProductsService } from '../products.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  loading: boolean = true
  products : Product[] = []
  loader = this.loadingBar.useRef();
  
  constructor(private Products : ProductsService,private loadingBar: LoadingBarService) { }

  ngOnInit(): void {
    this.loader.start()
    this.products = this.Products.getProducts()
  }

  ngDoCheck(): void {
    if(this.products.length > 0 && this.loading) {
      this.loading = false
      this.loader.complete()
    }
  }

}

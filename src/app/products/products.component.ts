import { Component, OnInit } from '@angular/core';
import { Product } from 'src/types/products';
import { ProductsService } from '../products.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  loading: boolean = true;
  toggle: boolean = true;
  products: Product[] = [];
  masterProducts: Product[] = [];
  productCategories: string[] = [];
  loader = this.loadingBar.useRef();
  filteredCategories: string[] = [];
  limit: number = 24;
  offset: number = 0;
  hasMore: boolean = true;

  constructor(
    private Products: ProductsService,
    private loadingBar: LoadingBarService
  ) {}

  ngOnInit(): void {
    this.loader.start();
    this.Products.getProducts().subscribe((response) => {
      if (response.products.length === response.total) {
        this.hasMore = false;
      }
      response.products.map((data: any) =>
        this.products.push({
          ProductName: data.title,
          Price: data.price,
          Description: data.description,
          DisplayImage: data.thumbnail,
          Images: data.images,
          ProductID: data.id,
          BrandName: data.brand,
          Discount: data.discountPercentage,
          AvailableStock: data.stock,
          Category: data.category,
        })
      );
    });
    this.masterProducts = this.products;
    this.Products.getProductCategories().subscribe((response) => {
      this.productCategories = response;
    });
  }

  ngDoCheck(): void {
    if (this.products.length > 0 && this.loading) {
      this.loading = false;
      this.loader.complete();
    }
  }

  onSelect(category: string) {
    if (category !== 'All') {
      if (this.filteredCategories.includes(category)) {
        var index = this.filteredCategories.indexOf(category);
        if (index !== -1) {
          this.filteredCategories.splice(index, 1);
        }
      } else {
        this.filteredCategories.push(category);
      }
      this.products = this.masterProducts.filter((products) => {
        return this.filteredCategories.includes(products.Category);
      });
    } else {
      this.filteredCategories = this.productCategories.slice();
      this.products = this.masterProducts;
    }
  }

  loadMore() {
    this.offset = this.limit + this.offset;
    this.Products.getProducts(this.limit, this.offset).subscribe((response) => {
      response.products.map((data: any) =>
        this.products.push({
          ProductName: data.title,
          Price: data.price,
          Description: data.description,
          DisplayImage: data.thumbnail,
          Images: data.images,
          ProductID: data.id,
          BrandName: data.brand,
          Discount: data.discountPercentage,
          AvailableStock: data.stock,
          Category: data.category,
        })
      );
      if (this.products.length === response.total) {
        this.hasMore = false;
      }
    });
    this.masterProducts = this.products;
  }
}

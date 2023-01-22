import { Injectable } from '@angular/core';
import { Product } from 'src/types/products';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }

  getProducts() {
    let products : Product[] = []
    const data = from(fetch('https://dummyjson.com/products/search?q=furniture'))
    data.subscribe({
      next(response) { response.json().then(data => {
        data.products.map((data : any) => products.push({
        ProductName: data.title,
        Price: data.price,
        Description: data.description,
        DisplayImage: data.thumbnail,
        Images: data.images,
        ProductID: data.id,
        BrandName: data.brand,
        Discount: data.discountPercentage,
        AvailableStock: data.stock
      }))
      }) },
      error(err) { console.error('Error: ' + err); },
    });
    return products
  }

  getProductById(id: string | null) {
    let product : any = {}
    const data = from(fetch('https://dummyjson.com/products/'+id))
    data.subscribe({
      next(response) { response.json().then(data => {
        product.ProductName = data.title
        product.Price= data.price,
        product.Description= data.description,
        product.DisplayImage= data.thumbnail,
        product.Images= data.images,
        product.ProductID= data.id,
        product.BrandName= data.brand,
        product.Discount= data.discountPercentage,
        product.AvailableStock= data.stock
      }) },
      error(err) { console.error('Error: ' + err); },
    });
    return product
  }
}

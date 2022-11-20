import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  products : {
    ProductName  : string,
    Price        : number,
    Description  : string,
    DisplayImage : string,
    Images       : string[],
    ProductID    : number
  }[] = []
  ngOnInit(): void {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      data.products.map((p : any) => {
        this.products.push({
          ProductName  : p.title,
          Price        : p.price,
          Description  : p.description,
          DisplayImage : p.thumbnail,
          Images       : p.images,
          ProductID    : p.id
        })
      })
      console.log(this.products);
    });
  }

}

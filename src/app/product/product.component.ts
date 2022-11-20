import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  id: string | null = ''
  Product: {
    ProductName: string;
    Price: any;
    Description: string;
    DisplayImage: string;
    Images: string[];
    ProductID: number;
    BrandName: string;
    Discount: number;
    AvailableStock: number;
  } | undefined
  Image : string = ''
  SelectedImage : number = 0
  Count : number = 1
  TotalCost : number = 0

  SwitchImage(i: number) {
    this.SelectedImage = i; 
    this.Image  = this.Product?.Images[i] as string
  }

  OriginalPrice(dis : any ,sell : any) {
    let dec = dis/100
    let x = sell / (1 - dec)
    return x.toFixed(2)
  }

  HandleCount(type : string) {
    type === 'inc' ? this.Count++ : this.Count === 0 ? this.Count = 0 : this.Count--
    this.TotalCost = this.Count*this.Product?.Price
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    fetch('https://dummyjson.com/products/'+this.id)
    .then(res => res.json())
    .then(data => { 
      this.Product = {
        ProductName: data.title,
        Price: data.price,
        Description: data.description,
        DisplayImage: data.thumbnail,
        Images: data.images,
        ProductID: data.id,
        BrandName: data.brand,
        Discount: data.discountPercentage,
        AvailableStock: data.stock
      }
      this.TotalCost = data.price
      this.Image = data.images[this.SelectedImage]
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/types/products';
import { ProductsService } from '../products.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  loader = this.loadingBar.useRef();

  constructor(private route: ActivatedRoute, private Products : ProductsService,private loadingBar: LoadingBarService) {}

  id: string | null = ''
  Product: Product | undefined
  Image : string | undefined = ''
  SelectedImage : number = 0
  Count : number = 1
  TotalCost : number = 0
  loading: boolean = true

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
    this.loader.start()
    this.id = this.route.snapshot.paramMap.get('id')
    this.Product = this.Products.getProductById(this.id)
  }

  ngDoCheck(): void {
    if(this.Product && this.loading) {
      this.TotalCost = this.Product?.Price
      this.Image = this.Product?.Images[this.SelectedImage]
      this.loading = false
      this.loader.complete()
    }
  }
}

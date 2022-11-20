import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent implements OnInit {

  constructor() { }
  @Input() Product: {
    ProductName: string;
    Price: number;
    Description: string;
    DisplayImage: string;
    Images: string[];
    ProductID: number;
  } | undefined
  ngOnInit(): void {
    
  }

}

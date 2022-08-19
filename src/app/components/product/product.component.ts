import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../interface/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productComp!: IProduct;
  public details = false;
  sum:any = 0
  
  constructor() { }

  ngOnInit(): void {
  }

  

}

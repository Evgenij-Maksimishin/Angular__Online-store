import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Forms } from '../interface/forms';
import { ModalService } from '../services/modal.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }


  
  constructor
    (
      public productsService:ProductsService,
      public modalService: ModalService
    ) { }

  ngOnInit(): void {
    console.log(this.form);
    
  }

  submit() {
    /* console.log(this.title);
    
    console.log(this.form.value); */

    this.productsService.createProduct({
      title: this.form.value,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 42,
        count: 7
      }
    }).subscribe(() => this.modalService.close())
    
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { IProduct } from './components/interface/product';
import { ModalService } from './components/services/modal.service';
import { ProductsService } from './components/services/products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /*  public dataProduct:IProduct[] = []; */
  public loading = true;
  showClerBtn = false
  form = new FormGroup({
    filterProducts1: new FormControl('')
  });



  /* dataProduct$: Observable<IProduct[]> | undefined   */

  constructor
    (
      public productsService: ProductsService,
      public modalService: ModalService
    ) { }

  ngOnInit() {
    this.loading = true;
    this.productsService.getAll().subscribe((el) => {
      /* this.dataProduct = el; */
      this.loading = false;
    });
    /* this.loading = true;
    this.dataProduct$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    ) */

    console.log(this.form);

  }

  clearFilter() {
    this.form.value.filterProducts1 = ''
    this.showClerBtn = false

  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interface/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(productsPipe: IProduct[], seachPipe: string): IProduct[] {
    if(seachPipe.length === 0) return productsPipe
    return productsPipe.filter(el => el.title.toLowerCase().includes(seachPipe.toLowerCase()))
  }

}

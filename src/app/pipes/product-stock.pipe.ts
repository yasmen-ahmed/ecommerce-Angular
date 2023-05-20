import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productStock'
})
export class ProductStockPipe implements PipeTransform {

  transform(value:number, ...args: unknown[]): string {
    return value == 0 ? 'out of stock' : 'In stock';
  }

}

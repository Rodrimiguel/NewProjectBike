import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterimages',
  standalone: true
})
export class FilterimagesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

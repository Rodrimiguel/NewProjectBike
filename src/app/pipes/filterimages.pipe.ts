import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterimages'
})
export class FilterimagesPipe implements PipeTransform {

  transform(items: any[], bikeBrand: string): any {
    if (bikeBrand === 'all') {
      return items; // si me viene el parametro 'all' no filtramos y retornamos el array completo con todos los modelos de bicicletas
    } else {
      return items.filter(item => {
        return item.brand === bikeBrand;
      })
    }
  }
}

// {{ arrayDeObjetosBikes | filterimages : 'adultosrc'}}

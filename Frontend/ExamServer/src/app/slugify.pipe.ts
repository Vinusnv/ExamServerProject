import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'slugify'})
export class SlugifyPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.toLowerCase()
                .replace(/ /g,'-')
                .replace(/[^\w-]+/g,'');
  }
}

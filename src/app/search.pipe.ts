import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform { 
  transform(items: any[], search: string): any[] {
  if (!search || search === 'All') {
    return items;
  }
  return items.filter(item => item.Status === search);
}

}



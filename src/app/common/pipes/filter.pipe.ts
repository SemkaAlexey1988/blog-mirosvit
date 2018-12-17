import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(titlesList, searchString: string) {
    if(titlesList.length === 0 || searchString === ''){
    return titlesList;
    }

return titlesList.filter(articles => articles.title.rendered.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 );

  }

}

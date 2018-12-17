import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ArticlesService } from '../common/services/articles.service';

import { Categories } from '../common/models/categories.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class ArticlesComponent implements OnInit {

 listCategories: Categories[] = [];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
  	this.articlesService
.getCategoriesList()
.subscribe((listCategories: Categories[]) => {
this.listCategories = listCategories;
	// console.log(this.listCategories);
});	

  }

}

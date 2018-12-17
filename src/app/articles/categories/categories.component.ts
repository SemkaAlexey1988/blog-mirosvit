import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { ArticlesService } from '../../common/services/articles.service';

import { Articles } from '../../common/models/articles.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private articlesService: ArticlesService, private title: Title, private meta: Meta ) { }

  linkTo(id){
  this.router.navigate(['/post/' + id]);
}
  id: number;
  name: string;

  seoTags: string;

   listArticles: Articles[] = [];

   searchTitle = '';



clearInput(searchInput){
  searchInput.placeholder="";
}

   

  ngOnInit() {






  this.id = +this.route.snapshot.params['id'];
  this.name = this.route.snapshot.params['name'];

this.seoTags = this.name.charAt(0).toUpperCase() + this.name.slice(1);

   this.title.setTitle(this.seoTags);
  this.meta.removeTag("name='keywords'");
  this.meta.removeTag("name='description'");
  this.meta.addTags([
{name:'keywords', content: `blog, Mirosvit, $this.seoTags}`},
{name:'description', content: `Interesting articles about ${this.seoTags}`}
])

    	this.articlesService
.getByCategoriesList(this.id)
.subscribe((listArticles: Articles[]) => {
this.listArticles = listArticles;
//	console.log(this.listArticles);
});


this.route.params.subscribe((params: Params) => {
	this.id = +params['id'];
	this.name = params['name'];

  this.seoTags = this.name.charAt(0).toUpperCase() + this.name.slice(1)

   this.title.setTitle(this.seoTags)
  this.meta.removeTag("name='keywords'")
  this.meta.removeTag("name='description'")
  this.meta.addTags([
{name:'keywords', content: `blog, Mirosvit, ${this.seoTags}`},
{name:'description', content: `Interesting articles about ${this.seoTags}`}
])
    	this.articlesService
.getByCategoriesList(this.id)
.subscribe((listArticles: Articles[]) => {
this.listArticles = listArticles;
//	console.log(this.listArticles);
});

});


  }

}

import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute} from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { ArticlesService } from '../../common/services/articles.service';

import { Articles } from '../../common/models/articles.model';





@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

 listArticles: Articles[] = [];

searchTitle = '';

  constructor(private articlesService: ArticlesService, private router: Router, private route: ActivatedRoute, private title: Title, private meta: Meta ) {
  title.setTitle('Blog Mirosvit')
  this.meta.removeTag("name='keywords'")
  this.meta.removeTag("name='description'")
  meta.addTags([
{name:'keywords', content: 'blog, Mirosvit'},
{name:'description', content: 'Main page of blog Mirosvit'}
])
  }


linkTo(id){
	this.router.navigate(['post/' + id], {relativeTo: this.route});
}

clearInput(searchInput){
  searchInput.placeholder="";
}


  ngOnInit() {



  	this.articlesService
.getArticlesList()
.subscribe((listArticles: Articles[]) => {
this.listArticles = listArticles;
	console.log(this.listArticles);
});	

  }

}

import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { 
  title.setTitle('Page not found')
   this.meta.removeTag("name='keywords'")
  this.meta.removeTag("name='description'")
  meta.addTags([
{name:'keywords', content: 'page, 404'},
{name:'description', content: 'This is page 404'}
  ]);

  }

  ngOnInit() {
 
  }

}

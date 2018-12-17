import { Component, OnInit, ViewEncapsulation} from '@angular/core';

import { ArticlesService } from './common/services/articles.service';
import { Categories } from './common/models/categories.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})






export class AppComponent implements OnInit {






  constructor(private articlesService: ArticlesService) { 

  }




 

  title = 'app';
 listCategories: Categories[] = [];
 status: boolean = false;
 statusSecond: boolean = false;


toggleMenu(mobileMenu){
	this.status = !this.status; 
//	mobileMenu.style.background='red'

}


 onClickedOutside(e: Event) {
 if(this.status == true){
    console.log('Clicked outside:', e);
    this.status = false;
  }
  }




    ngOnInit() {

  	this.articlesService
.getCategoriesList()
.subscribe((listCategories: Categories[]) => {
this.listCategories = listCategories;

});	

  }

}

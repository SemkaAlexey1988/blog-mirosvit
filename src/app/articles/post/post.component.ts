import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

import { ArticlesService } from '../../common/services/articles.service';

import { Post } from '../../common/models/post.model';
import { Category } from '../../common/models/category.model';
import { Comment } from '../../common/models/comment.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private articlesService: ArticlesService, private title: Title, private meta: Meta) { }




 form: FormGroup  

  id: number;
  onePost: Post;
  listComments: Comment[] = [];
  titleCategory: Category;

  author_name: string;
  author_email: string;
  content: string;
  post: number;
messageSuccess: boolean;

nameValue: string;
emailValue: string;
messageValue: string;

namberCategoy: number;
  

  ngOnInit() {


   this.messageSuccess = false;

   this.nameValue = "";
   this.emailValue = "";
   this.messageValue = "";

this.form = new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  message: new FormControl('', Validators.required)

});





this.id = +this.route.snapshot.params['id'];


    	this.articlesService
.getPost(this.id)
.subscribe((onePost: Post) => {
this.onePost = onePost;
//console.log(this.onePost);
this.namberCategoy = this.onePost.categories[0];


 this.title.setTitle(onePost.title.rendered)
  this.meta.removeTag("name='keywords'")
  this.meta.removeTag("name='description'")
  this.meta.addTags([
{name:'keywords', content: `blog, 'Mirosvit', ${onePost.title.rendered}`},
{name:'description', content: `Interesting article about ${onePost.title.rendered}`}
])


    this.articlesService
.getCategoryById(this.namberCategoy)
.subscribe((titleCategory: Category) => {
this.titleCategory = titleCategory;
  })

});




    	this.articlesService
.getComments(this.id)
.subscribe((listComments: Comment[]) => {
this.listComments = listComments;
// console.log(this.listComments);
});



  }

onSubmit(){
 

this.author_name = this.form.value.name;
this.author_email = this.form.value.email;
this.content = this.form.value.message;
this.post = this.id;
this.articlesService
.addComment(this.author_name, this.author_email, this.content, this.post)
.subscribe((json: Comment[]) => {

this.listComments.push(json);

this.messageSuccess = true;

setInterval(()=>{
      this.messageSuccess = false;
},5000)

this.nameValue = null;
this.emailValue = null;
this.messageValue = null;


});
}


}

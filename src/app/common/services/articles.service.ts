import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ArticlesService {
	
constructor(private http: Http){}


url:string = 'http://herba.mirosvit.com/wp-json/wp/v2';


getArticlesList(){
return this.http.get(`${this.url}/posts`).map((response: Response) => {
return response.json();	
});

}

getCategoriesList(){
return this.http.get(`${this.url}/categories`).map((response: Response) => {
return response.json();	
});

}

getCategoryById(id:number){
return this.http.get(`${this.url}/categories/${id}`).map((response: Response) => {
return response.json();	
});

}


getByCategoriesList(id:number){
return this.http.get(`${this.url}/posts?categories=${id}`).map((response: Response) => {
return response.json();	
});

}

getPost(id:number){
return this.http.get(`${this.url}/posts/${id}`).map((response: Response) => {
return response.json();	
});	
}

getComments(id:number){
return this.http.get(`${this.url}/comments?post=${id}`).map((response: Response) => {
return response.json();	
});	
}

addComment(author_name, author_email, content, post){


const data = {
	author_name: author_name,
	author_email: author_email,
	content: content,
	post: post
}

return this.http.post(`${this.url}/comments`, data ).map((response: Response) => {
return response.json();	
});
}





}
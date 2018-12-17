import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { ClickOutsideModule } from 'ng-click-outside';

import { ArticlesModule } from './articles/articles.module';
import { AppRoutingModule } from './app.routing.module';


import { ArticlesService } from './common/services/articles.service';


import { AppComponent } from './app.component';
import { PostComponent } from './articles/post/post.component';
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    ArticlesModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule, 
    ClickOutsideModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

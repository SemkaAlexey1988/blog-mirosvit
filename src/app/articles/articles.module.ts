import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import { ArticlesRoutingModule } from './articles.routing.module';

import { ListComponent } from './list/list.component';
import { CategoriesComponent } from './categories/categories.component';
import { ArticlesComponent } from './articles.component';

import { FilterPipe } from '../common/pipes/filter.pipe';




@NgModule({
  declarations: [
    ListComponent,
    ArticlesComponent,
     CategoriesComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ArticlesRoutingModule,
    FormsModule
  ],
  exports: [
    ArticlesComponent
  ],
  providers: []
})
export class ArticlesModule { }
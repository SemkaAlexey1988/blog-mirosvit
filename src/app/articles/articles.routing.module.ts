import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [

];
@NgModule({
imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
RouterModule
  ]

})

export class ArticlesRoutingModule {}
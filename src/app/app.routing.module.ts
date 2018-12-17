import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './articles/list/list.component';
import { PostComponent } from './articles/post/post.component';
import { CategoriesComponent } from './articles/categories/categories.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
{path: '', component: ListComponent},
{path: 'category/:id/:name', component: CategoriesComponent},
{path: 'post/:id', component: PostComponent},
{path:  '**', component: NotFoundComponent }
// {path:  '**', redirectTo: '/' }
];
@NgModule({
imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
RouterModule
  ]

})

export class AppRoutingModule {}
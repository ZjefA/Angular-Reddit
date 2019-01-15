import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import { AppComponent } from './app.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { AppRoutingModule } from './app-routing/app-routing.module';
// import {CategoryModule} from "./category/category.module";
import {UserModule} from "./user/user.module";
import { CategoryListComponent } from './components/category_components/category-list/category-list.component';
import { RedditDataService } from './reddit-data.service';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category_components/category/category.component';
import { CommentComponent } from './components/comment_components/comment/comment.component';
import { PostComponent } from './components/post_components/post/post.component';
import { HttpClientModule } from '@angular/common/http';


const routes = [
  { path: 'categories', component: CategoryListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryComponent,
    CommentComponent,
    PostComponent
    //PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    //CategoryModule
  ],
  providers: [RedditDataService],
  bootstrap: [AppComponent]
})
export class AppModule{}


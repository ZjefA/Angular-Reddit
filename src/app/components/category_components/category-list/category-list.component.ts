import { Component, OnInit } from '@angular/core';
import { RedditDataService } from '../../../reddit-data.service';
import { Category } from '../../../shared/models/Category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  private _categories: Category[];

  constructor(private _redditDataService: RedditDataService) { }

  ngOnInit() {
    this._redditDataService.categories.subscribe(
      categories => (this._categories = categories)
    );
  }

  get categories(){
    return this._categories;
  }

}

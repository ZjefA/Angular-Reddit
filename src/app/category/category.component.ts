import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: String[];

  constructor() {
    this.categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];
  }

  ngOnInit() {
  }

}

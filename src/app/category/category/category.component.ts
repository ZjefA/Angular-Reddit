import { Component, OnInit, Input } from '@angular/core';
import { Category } from "../../shared/models/Category";
import { CategoryDataService } from "../category-data.service";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() public category: Category;

  constructor(private _categoryDataService: CategoryDataService) {
  }

  ngOnInit() {

  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Category } from "../../shared/models/Category";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() public category: Category;

  constructor() {
  }

  ngOnInit() {

  }
}

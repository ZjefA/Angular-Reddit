import {Category} from "./Category";
import {Post} from "./Post";

export class User{
  private _username: String;
  private _categories: Category[];

  constructor(username: String, categories?: Category[]) {
    this._username = username;
    this._categories = categories || new Array<Category>();
  }

  get username(): String {
    return this._username;
  }

  get categories(): Category[] {
    return this._categories;
  }

  set categories(value: Category[]) {
    this._categories = value;
  }

  addCategory(category: Category) {
    this._categories.push(category);
  }
}

import {Category} from "./Category";
import {Post} from "./Post";

export class User{
  private _username: String;
  private _password: String;
  private _categories: Category[];

  constructor(username: String, password: String, categories?: Category[]) {
    this._username = username;
    this._password = password;
    this._categories = categories || new Array<Category>();
  }

  get username(): String {
    return this._username;
  }

  set username(value: String) {
    this._username = value;
  }

  get password(): String {
    return this._password;
  }

  set password(value: String) {
    this._password = value;
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

import {Post} from './Post';
import {User} from "./User";

export class Category{
  private _name: string;
  private _posts: Post[];

  constructor(name: string, posts?: Post[]){
    this._name = name;
    this._posts = posts || new Array<Post>();
  }

  static fromJSON(json): Category {
    const rec = new Category(json.name, json.posts);
    rec._name = json._name;
    return rec;
  }

  toJSON() {
    return {
      name: this._name,
      posts: this._posts
    };
  }

  addPost(titel: string, maker: User, inhoud: string) {
    this._posts.push(new Post(titel, maker, inhoud));
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get posts(): Post[] {
    return this._posts;
  }

}

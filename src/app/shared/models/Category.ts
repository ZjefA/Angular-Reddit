import {Post} from './Post';
import {User} from "./User";

export class Category{
  private _id: string;
  private _name: string;
  private _posts: Post[];

  constructor(name: string, posts?: Post[]){
    this._name = name;
    this._posts = posts || new Array<Post>();
  }

  static fromJSON(json): Category {
    const rec = new Category(
      json.name, 
      json.posts.map(Post.fromJSON)
      );
    rec._id = json._id;
    return rec;
  }

  toJSON() {
    return {
      _id: this._id,
      name: this._name,
      posts: this._posts
    };
  }

  addPost(titel: string, maker: User, inhoud: string) {
    this._posts.push(new Post(titel, maker, inhoud));
  }

  get id(): string {
    return this._id;
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

  static print(item: any | undefined) {
    console.log(item);
  }
}

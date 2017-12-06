import {Comment} from './Comment';
import {User} from './User';

export class Post{
  private _titel: string;
  private _aantalUpvotes: number;
  private _maker: User;
  private _inhoud: string;
  private _comments: Comment[];

  constructor(titel: string, maker: User, inhoud: string, comments?: Comment[]){
    this._titel = titel;
    this._maker = maker;
    this._inhoud = inhoud;
    this.comments = comments || new Array<Comment>();
    this.aantalUpvotes = 0;
  }

  addComment(maker: User, inhoud: string){
    this._comments.push(new Comment(maker, inhoud));
  }

  get aantalUpvotes(): number {
    return this._aantalUpvotes;
  }

  set aantalUpvotes(value: number) {
    this._aantalUpvotes = value;
  }

  get maker(): User {
    return this._maker;
  }

  set maker(value: User) {
    this._maker = value;
  }

  get titel(): string {
    return this._titel;
  }

  set titel(value: string) {
    this._titel = value;
  }


  get inhoud(): string {
    return this._inhoud;
  }

  set inhoud(value: string) {
    this._inhoud = value;
  }

  get comments(): Comment[] {
    return this._comments;
  }

  set comments(value: Comment[]) {
    this._comments = value;
  }
}

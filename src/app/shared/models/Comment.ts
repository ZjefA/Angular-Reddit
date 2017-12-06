import {User} from './User';

export class Comment{
  private _maker: User;
  private _inhoud: string;
  private _aantalUpvotes: number;
  private _comments: Comment[];

  constructor(maker: User, inhoud: string, comments?: Comment[]){
    this._maker = maker;
    this._inhoud = inhoud;
    this._comments = comments || new Array<Comment>();
    this._aantalUpvotes = 0;
  }

  addComment(maker: User, inhoud: string){
    this._comments.push(new Comment(maker, inhoud));
  }

  get maker(): User {
    return this._maker;
  }

  set maker(value: User) {
    this._maker = value;
  }

  get inhoud(): string {
    return this._inhoud;
  }

  set inhoud(value: string) {
    this._inhoud = value;
  }

  get aantalUpvotes(): number {
    return this._aantalUpvotes;
  }

  set aantalUpvotes(value: number) {
    this._aantalUpvotes = value;
  }

  get comments(): Comment[] {
    return this._comments;
  }

  set comments(value: Comment[]) {
    this._comments = value;
  }
}

import {Comment} from './Comment';
import {User} from './User';

export class Post{
  private _id: string;
  private _titel: string;
  private _aantalUpvotes: number;
  private _maker: User;
  private _inhoud: string;
  private _comments: Comment[];

  constructor(titel: string, maker: User, inhoud: string, aantalUpvotes?: number, comments?: Comment[]){
    this._titel = titel;
    this._maker = maker;
    this._inhoud = inhoud;
    this.comments = comments || new Array<Comment>();
    this._aantalUpvotes = this.aantalUpvotes || 0;
  }

  addComment(maker: User, inhoud: string){
    this._comments.push(new Comment(maker, inhoud));
  }

  static fromJSON(json): Post {
    const rec = new Post(json.titel, json.maker, json.inhoud, json.aantalUpvotes, json.comments);
    rec._id = json._id;
    return rec;
  }

  toJSON() {
    return {
      _id: this._id,
      titel: this._titel,
      maker: this._maker,
      inhoud: this._inhoud,
      aantalUpvotes: this._aantalUpvotes,
      comments: this._comments
    };
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get aantalUpvotes(): number {
    return this._aantalUpvotes;
  }

  upvote() {
    this._aantalUpvotes += 1;
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Category } from '../app/shared/models/Category';

@Injectable()
export class RedditDataService {

  private _appUrl = "/API";

  constructor(private http: HttpClient) { }

  get categories(): Observable<Category[]> {
    return this.http.get(`${this._appUrl}/categories/`)
      .pipe(map((list: any[]): Category[] => list.map(Category.fromJSON)));
  }

}

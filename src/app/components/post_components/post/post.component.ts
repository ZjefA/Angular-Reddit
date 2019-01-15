import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../shared/models/Post'
import {ActivatedRoute} from "@angular/router";
import {RedditDataService} from "../../../reddit-data.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postid: string;
  private post: Post;

  constructor(private _route: ActivatedRoute, private _redditDataService: RedditDataService) {

  }

  ngOnInit(){
    //this.route.paramMap.subscribe(pa => this.categoryDataService.getPost(pa.get('id')).subscribe(item => this.post = item));
  }


}

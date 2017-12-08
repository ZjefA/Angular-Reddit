import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../shared/models/Post'
import {ActivatedRoute} from "@angular/router";
import {CategoryDataService} from "../category-data.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postid: string;
  private post: Post;

  constructor(private route: ActivatedRoute, private categoryDataService: CategoryDataService) {

  }

  ngOnInit(){
    this.route.paramMap.subscribe(pa => this.categoryDataService.getPost(pa.get('id')).subscribe(item => this.post = item));
  }


}

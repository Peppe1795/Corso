import { Component, OnInit } from '@angular/core';
import { FetchService } from '../service/fetch.service';
import { ViwPost } from '../models/viw-post';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.scss']
})
export class SecondoComponent implements OnInit {

  posts: ViwPost[] = [];
  constructor(private postsrv: FetchService) {
    this.postsrv.getData().then((response) => {
      this.posts = response;
    });
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FetchService } from '../service/fetch.service';
import { ViwPost } from '../models/viw-post';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.scss'],
})
export class PrimoComponent implements OnInit {
  posts: ViwPost[] = [];
  constructor(private postsrv: FetchService) {
    this.postsrv.getData().then((response) => {
      this.posts = response;
    });
  }

  ngOnInit(): void {}
}

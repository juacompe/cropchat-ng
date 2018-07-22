import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import PostPresenter from '../../presenters/PostPresenter';
import { CatlistService } from '../catlist.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  presenter: PostPresenter

  constructor(private $http: HttpClient, private catlistService: CatlistService, private router: Router) {
    this.presenter = new PostPresenter(this)
  }

  ngOnInit() { this.presenter.init() }
  postCat() { this.presenter.postCat() }
  pushNewCat(newCat) {
    return this.catlistService.pushNewCat(newCat)
  }
  backToHome() {
    console.log('enter backToHome')
    this.router.navigateByUrl('/')
  }
}

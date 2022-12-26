import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];
  constructor(public router: Router) {}

  ngOnInit(): void {
    const tmp = sessionStorage.getItem('article-list');
    if (tmp) {
      this.articles = JSON.parse(tmp);
    }
  }
}

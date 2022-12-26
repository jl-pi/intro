import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingPageComponent implements OnInit {
  post1?: Article;
  post2?: Article;
  articles: Article[] = [];
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    const options = {
      strings: ['Stay curious, Keep sane', 'Stay curious, Keep sane', 'Stay curious, Keep sane'],

      typeSpeed: 20,
      startDelay: 100,
      loopCount: 3,
      loop: true,
    };

    const typed = new (<any>window).Typed('#typed', options);

    this.articleService.getArticleList().subscribe(data => {
      data.records.forEach((element: any) => {
        this.articles = [...this.articles, element.fields as Article];
      });
      sessionStorage.setItem('article-list', JSON.stringify(this.articles));
    });
  }
}

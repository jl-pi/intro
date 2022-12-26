import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  fileName: string = '';
  id?: number;
  previousArticle?: Article;
  nextArticle?: Article;
  constructor(private _Activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    this._Activatedroute.params.subscribe(params => {
      this.id = params['id'];
      const tmp = sessionStorage.getItem('article-list');
      if (tmp && this.id) {
        const articles: Article[] = JSON.parse(tmp) as Article[];
        const article = articles.filter(e => e.id == this.id).pop();
        if (article) {
          this.fileName = article.fileName;
          let tmp_id = articles.indexOf(article);
          this.previousArticle = tmp_id > 0 ? articles[tmp_id - 1] : undefined;
          this.nextArticle = tmp_id < articles.length - 1 ? articles[tmp_id + 1] : undefined;
        }
      }
    });
  }
}

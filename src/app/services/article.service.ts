import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticleList() {
    return this.http.get<any>(`${environment.API_URL}?view=article`);
  }

  getArticle(id: number) {
    return this.http.get<any>(`${environment.API_URL}/article/` + id + '/');
  }
}

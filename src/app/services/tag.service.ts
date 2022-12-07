import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Tag } from '../models/tag.model';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TagService {
  url = 'http://localhost:8080/todos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tag[]> {
    return this.http.get(this.url).pipe(
      map((res: any) => {
        return res._embedded.todos

      }

      )
    );
  }

  createTag(data: any) {
    return this.http.post(this.url, data)
  }
}

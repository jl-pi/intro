import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isApiUrl = req.url.startsWith(environment.API_URL);
    if (isApiUrl) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer keyTPD1HD0TKr99WX`,
        },
      });
    }
    return next.handle(req);
  }
}

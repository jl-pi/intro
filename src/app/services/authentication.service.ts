import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') ?? ''));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(environment.API_URL + `/api/token/`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        this.startRefreshTokenTimer();
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');

    this.stopRefreshTokenTimer();
    this.userSubject.next(null as any);
    this.router.navigate(['/login']);
  }


  register(user: any) {
    return this.http.post(`${environment.API_URL}/register/`, user);
  }

  getUserInfo() {
    return this.http.get<any>(`${environment.API_URL}/userinfo/`);
  }
  updateUserInfo(params: any) {
    return this.http.put(`${environment.API_URL}/userinfo/`, params)
      .pipe(map(x => {
        // update stored user if the logged in user updated their own record

        // update local storage
        const user = { ...this.userValue, ...params };
        localStorage.setItem('user', JSON.stringify(user));

        // publish updated user to subscribers
        this.userSubject.next(user);

        return x;
      }));

  }



  refreshToken() {

    return this.http.post<any>(`${environment.API_URL}/api/token/refresh/`, { 'refresh': this.userSubject.value ? this.userSubject.value.refresh : null })
      .pipe(map((token) => {
        this.userValue.access = token.access;
        this.userSubject.next(this.userValue);
        localStorage.setItem('user', JSON.stringify(this.userValue));
        this.startRefreshTokenTimer();
        return this.userValue;
      }));

  }

  // helper methods

  private refreshTokenTimeout: string | number | NodeJS.Timeout | undefined;

  private startRefreshTokenTimer() {
    // parse json object from base64 encoded jwt token
    const jwtToken = JSON.parse(atob(this.userValue.access.split('.')[1]));
    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }


}

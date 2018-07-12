import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export interface AuthToken {
  token: string;
  username: string;
}

@Injectable()
export class UserService {

  readonly host: string = 'http://127.0.0.1:8000/app';
  token: string;
  constructor(private http: HttpClient) { }
  userAuthantication(username: string, password: string) {
    const url = '/login/';
    console.log(this.host + url);
    const requestHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<AuthToken>(this.host + url,
      {
        'username': username,
        'password': password
      },
      {
        headers: requestHeader
      })
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.status === 400) {

    }
    return Observable.throw(error.message || 'Server Error');
  }
}

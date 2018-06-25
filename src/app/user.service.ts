import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export interface AuthToken {
  token: string;
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
      });
  }
}

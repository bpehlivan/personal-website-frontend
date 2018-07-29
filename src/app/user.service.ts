import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthToken, Register, GetRecords, Record } from './interfaces';
@Injectable()
export class UserService {

  readonly host: string = 'http://127.0.0.1:8000/app';
  token: string;
  constructor(private http: HttpClient) { }

  userRegistration(username: string, firstname: string,
    lastname: string, email: string, password: string) {
    const url = '/register';
    console.log(this.host + url);
    const requestHeader = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    );
    const body = {
      'username': username,
      'email': email,
      'password': password,
      'first_name': firstname,
      'last_name': lastname
    };
    return this.http.post<Register>(this.host + url, body,
      {
        headers: requestHeader
      });
  }

  userAuthantication(username: string, password: string) {
    const url = '/login';
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

  getRecords(token: string) {
    const url = '/getrecords';
    const header = new HttpHeaders({
      'Authorization': 'Token ' + token
    });
    return this.http.get<GetRecords>(this.host + url, {
      headers: header
    });
  }
}

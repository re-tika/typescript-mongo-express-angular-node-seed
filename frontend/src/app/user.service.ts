import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {User} from "./user";

@Injectable()
export class UserService {

  constructor(
      private http: Http
  ) { }

  private get loginApi(): string {
    return 'api/v1/login'
  }

  private get userApi(): string {
    return 'api/v1/users'
  }


  login(username: string, password: string) {
    this.http.get(this.loginApi).toPromise().then(resp => {
      console.log(resp);
    });
  }

  createUser(user: User, password: string) {
    this.http.post(this.userApi, {
      user: user,
      password: password
    }).toPromise().then(resp => {
      console.log(resp);
    })
  }


}

import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.interface";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  public user = new Subject<User>();

  fetchUser() {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Random number 1 - 10
    this.http
      .get(`https://jsonplaceholder.typicode.com/users/${randomNumber}`)
      .subscribe((user: User) => this.user.next(user));
  }
}

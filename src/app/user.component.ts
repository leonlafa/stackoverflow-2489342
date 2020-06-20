import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "./user.service";
import { interval, Subject, Subscription } from "rxjs";
import { User } from "./user.interface";

@Component({
  selector: "user",
  template: `
    <pre>
      {{ user$ | async | json }}
    </pre
    >
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class UserComponent implements OnInit, OnDestroy {
  name: string;
  interval = interval(5000); // Interval @ 5 seconds
  user$: Subject<User>;
  intervalSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.userService.user;
    this.userService.fetchUser();
    this.intervalSubscription = this.interval.subscribe(val => {
      this.userService.fetchUser();
    });
  }

  ngOnDestroy() {
    this.intervalSubscription.unsubscribe();
  }
}

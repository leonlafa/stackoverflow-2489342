import { Component, Input } from "@angular/core";
import { UserService } from "./user.service";
import { interval, Subject } from "rxjs";
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
export class UserComponent {
  name: string;
  interval = interval(5000); // Interval @ 5 seconds
  user$: Subject<User>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.userService.user;
    this.userService.fetchUser();
    this.interval.subscribe(val => {
      this.userService.fetchUser();
    });
  }
}

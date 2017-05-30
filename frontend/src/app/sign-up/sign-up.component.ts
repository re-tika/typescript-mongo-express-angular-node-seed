import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
      private userService: UserService
  ) { }

  private newUser = {
    email: undefined,
    uid: undefined
  };
  private password = "";

  ngOnInit() {
  }

  doSignUp() {
    this.userService.createUser(this.newUser, this.password).then(resp => {
      console.log(resp);
    })
  }

}

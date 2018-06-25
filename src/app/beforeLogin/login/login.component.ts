import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  token: string;
  username: string;
  password: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  authanticate() {
    this.userService.userAuthantication(this.username, this.password)
      .subscribe(resp => this.token = resp['token']);
    console.log(this.username, this.password); // for testig purposers
    console.log(this.token); // for testig purposers
  }

}

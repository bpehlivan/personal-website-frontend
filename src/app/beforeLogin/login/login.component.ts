import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  token: string;
  username: string;
  password: string;
  user: string;
  isAuthanticatedFail = false;
  public errorMsg = 'empty';
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  authanticate() {
    this.isAuthanticatedFail = false;
    this.userService.userAuthantication(this.username, this.password)
      .subscribe(
        resp => {
          this.token = resp['token'],
            this.user = resp['username'];
          localStorage.setItem('token', this.token);
          localStorage.setItem('isAuthanticated', 'true');
          this.router.navigateByUrl('/fittrack');
        },
        error => {
          // this.errorMsg = error;
          console.log(error);
          this.password = '';
          this.isAuthanticatedFail = true;
        }
      );
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password2: string;
  response: string;
  doesUsernameExists = false;
  error = 'empty error';
  isRegistrationFail = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    this.doesUsernameExists = false;
    this.userService.userRegistration(
      this.username, this.firstName, this.lastName,
      this.email, this.password)
      .subscribe(
        resp => {
          this.response = resp['response'];
          console.log(resp);
        },
        error => {
          this.isRegistrationFail = true;
        }
      );
    console.log(this.error);
  }

  clear(): void {
    this.username = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.password2 = '';
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
   username: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }
  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.setItem('isAuthanticated', 'false');
    this.router.navigate(['/home']);
  }
}

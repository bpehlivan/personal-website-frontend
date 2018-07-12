import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(el) {
    const element: any = document.getElementById(el);
    element.scrollIntoView({
      behavior: 'smooth'
    });
}

}

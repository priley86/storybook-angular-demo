import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [
    `.storybook-icons {
      text-align: center;
    }
    .storybook-icons img {
      margin-left: 10px;
      margin-right: 10px;
      vertical-align: top;
    }
    .storybook-icons img.plus {
      margin-left: 0px;
      margin-top: 20px;
    }
    main {
      margin: 15px;
      max-width: 600;
      line-height: 1.4;
      font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif;
    }
    a {
      color: #1474f3;
      text-decoration: none;
      border-bottom: 1px solid #1474f3;
      padding-bottom: 2px;
    }
    .inline-code {
      font-size: 15px;
      font-weight: 600;
      padding: 2px 5px;
      border: 1px solid #eae9e9;
      border-radius: 4px;
      background-color: #f3f2f2;
      color: #3a3a3a;
    }`
  ]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

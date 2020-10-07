import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'finalPractice';
  public messageForChild:string="2";

  numberOfUsers(i) {
    this.messageForChild = i + 1;
  }
}

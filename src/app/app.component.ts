import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'finalPractice';
  public messageForChild: string = '1';

  numberOfUsers(i) {
    this.messageForChild = i + 1;
  }
}

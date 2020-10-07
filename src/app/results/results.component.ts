import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { RandomUserService } from '../service/random-user.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  public users: User[] = [];
  public user: User;

  @Input() numberOfUsers;

  constructor(public service: RandomUserService) {}

  ngOnInit(): void {
    this.service
      .getInformation(this.numberOfUsers)
      .subscribe((res) => this.getDataUsers(res));
  }

  getDataUsers(res) {
    for (let item of res.results) {
      this.user = new User(
        item.name.first,
        item.name.last,
        item.dob.age,
        item.gender,
        item.location.city,
        item.location.country,
        item.email,
        item.phone
      );
      this.users.push(this.user);
    }
    console.log(this.users);
  }
}

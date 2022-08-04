import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
public user:Users;
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(<string>sessionStorage.getItem('userdetails'));

  }

}

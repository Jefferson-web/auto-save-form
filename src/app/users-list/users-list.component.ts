import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users: User[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
    }, err => {
      console.error(err);
    });
  }

  redirect(user: User): void {
    if (user.registered) {
      this.router.navigate(["/user-detail", user.id]);
    } else {
      this.router.navigate(["/form", user.id]);
    }
  }

}

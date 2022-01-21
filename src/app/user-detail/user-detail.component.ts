import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../Models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.userService.getUser(id).subscribe(res => {
      this.user = res;
    });
  }

}

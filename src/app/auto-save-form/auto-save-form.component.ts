import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, switchMap } from 'rxjs/operators'
import { User } from '../Models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'auto-save-form',
  templateUrl: './auto-save-form.component.html',
  styleUrls: ['./auto-save-form.component.css']
})
export class AutoSaveFormComponent implements OnInit {

  title: string = '';
  userForm: FormGroup;
  userId: string;

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {

    this.userForm = this.createForm();

    this.userId = this.activatedRoute.snapshot.params['id'];

    if (this.userId) {

      this.title = "Edit user";
      this.userService.getUser(this.userId).subscribe(res => {
        this.userForm.setValue(res);
      });

    } else {

      this.title = "Create new user";
      this.userService.createUser().subscribe((res: User) => {
        this.userId = res.id;
        this.userForm.setValue(res);
      });

    }

    this.onFormChange();

  }

  onFormChange() {
    this.userForm.valueChanges.pipe(
      debounceTime(500),
      switchMap(formValue => this.userService.updateUser(this.userId, formValue))
    ).subscribe(res => {
      console.log("Saved");
    }, err => {
      console.error(err);
    });
  }

  cancel() {
    this.userService.deleteUser(this.userId).subscribe(res => {
      this.router.navigateByUrl("/user-list");
    }, err => {
      console.error(err);
    });
  }

  markAsRegistered() {
    this.userService.markAsRegistered(this.userId).subscribe(res => {
      console.log("Registered");
      this.router.navigateByUrl("/user-list");
    }, err => {
      console.error(err);
    });
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: [''],
      name: [''],
      lastname: [''],
      registered: [null]
    });
  }

}

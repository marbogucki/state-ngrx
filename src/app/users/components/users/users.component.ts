import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/User';
import { selectUsers, selectUsersLoading, selectUsersError } from '../../store';
import { loadUsers } from '../../store/users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]> = this.store.select(selectUsers);
  loading$: Observable<boolean> = this.store.select(selectUsersLoading);
  error$: Observable<any> = this.store.select(selectUsersError);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }
}





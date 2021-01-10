import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, mergeMap, map, tap } from 'rxjs/operators';
import { User } from '../models/User';
import { UsersService } from '../services/users.service';
import { loadUsers, loadUsersSuccess, loadUsersFailure, addUser, addUserSuccess, addUserFailure } from './users.actions';

@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() => 
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() => 
        this.usersService.fetchUsers().pipe(
          map(users => loadUsersSuccess({ users })),
          catchError(error => of(loadUsersFailure({ error }))) 
        )
      )
    )
  );

  addUser$ = createEffect(() => 
  this.actions$.pipe(
    ofType(addUser),
    mergeMap((action) => 
      this.usersService.addUser(action.user).pipe(
        map(user => addUserSuccess({ user })),
        tap(() => this.router.navigateByUrl('/users')),
        catchError(error => of(addUserFailure({ error }))) 
      )
    )
  )
);

  constructor(
    private actions$: Actions, 
    private usersService: UsersService,
    private router: Router
  ) {}
}




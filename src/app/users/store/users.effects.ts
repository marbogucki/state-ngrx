import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './users.actions';

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

  constructor(
    private actions$: Actions, 
    private usersService: UsersService
  ) {}
}




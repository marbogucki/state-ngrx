import { createAction, props } from '@ngrx/store';
import { User } from '../models/User';

enum UsersActions {
  LOAD_USERS = '[User] Load Users',
  LOAD_USERS_SUCCESS = '[User] Load Users Success',
  LOAD_USERS_FAILURE = '[User] Load Users Failure'
}

export const loadUsers = createAction(
  UsersActions.LOAD_USERS
);

export const loadUsersSuccess = createAction(
  UsersActions.LOAD_USERS_SUCCESS,
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  UsersActions.LOAD_USERS_FAILURE,
  props<{ error: any }>()
);



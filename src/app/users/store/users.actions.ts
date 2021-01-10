import { createAction, props } from '@ngrx/store';
import { User } from '../models/User';

enum UsersActions {
  LOAD_USERS = '[User] Load Users',
  LOAD_USERS_SUCCESS = '[User] Load Users Success',
  LOAD_USERS_FAILURE = '[User] Load Users Failure',
  ADD_USER = '[User] Add Users',
  ADD_USER_SUCCESS = '[User] Add Users Success',
  ADD_USER_FAILURE = '[User] Add Users Failure',
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


export const addUser = createAction(
  UsersActions.ADD_USER,
  props<{ user: Partial<User> }>()
);

export const addUserSuccess = createAction(
  UsersActions.ADD_USER_SUCCESS,
  props<{ user: User }>()
);

export const addUserFailure = createAction(
  UsersActions.ADD_USER_FAILURE,
  props<{ error: any }>()
);

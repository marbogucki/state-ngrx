import {
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { User } from '../models/User';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './users.actions';

export const usersStateFeatureKey = 'usersState';

export interface UsersState {
  users: User[],
  loading: boolean,
  error: unknown,
}

const initialUsersState: UsersState = {
  users: [],
  loading: false,
  error: undefined
}

export const reducers = createReducer(
  initialUsersState,
  on(loadUsers, (state) => ({ ...state, loading: true  })),
  on(loadUsersSuccess, (state, { users }) => ({ ...state, loading: false, users  })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, loading: false, error  })),
);

const selectUsersFeature = createFeatureSelector(
  usersStateFeatureKey
);

export const selectUsers = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.users
);

export const selectUsersLoading = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.loading
);

export const selectUsersError = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.error
);

export const metaReducers: MetaReducer<UsersState>[] = !environment.production ? [] : [];

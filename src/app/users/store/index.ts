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
import { loadUsers, loadUsersSuccess, loadUsersFailure, addUser, addUserSuccess, addUserFailure } from './users.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const usersStateFeatureKey = 'usersState';

// export interface UsersState {
//   users: User[],
//   loading: boolean,
//   error: unknown,
// }

export interface UsersState extends EntityState<User> {
  loading: boolean,
  error: unknown,
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({});

// const initialUsersState: UsersState = {
//   users: [],
//   loading: false,
//   error: undefined
// }

const initialUsersState: UsersState = userAdapter.getInitialState({
  loading: false,
  error: undefined
});

export const reducers = createReducer(
  initialUsersState,
  on(loadUsers, (state) => ({ ...state, loading: true  })),
  // on(loadUsersSuccess, (state, { users }) => ({ ...state, loading: false, users  })),
  on(loadUsersSuccess, (state, { users }) => userAdapter.setAll(users, {... state, loading: false})),
  on(loadUsersFailure, (state, { error }) => ({ ...state, loading: false, error  })),
  on(addUser, (state) => ({ ...state,  })),
  on(addUserSuccess, (state, { user }) => userAdapter.addOne(user, state)),
  // on(addUserSuccess, (state, { user }) => ({ 
  //   ...state, 
  //   users: [...state.users, user]  
  // })),
  on(addUserFailure, (state, { error }) => ({ ...state, error  })),
);

const selectUsersFeature = createFeatureSelector(
  usersStateFeatureKey
);

// export const selectUsers = createSelector(
//   selectUsersFeature,
//   (state: UsersState) => state.users
// );

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = userAdapter.getSelectors();

export const selectUsers = createSelector(
  selectUsersFeature,
  selectAll
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

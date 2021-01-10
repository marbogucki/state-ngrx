import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { usersStateFeatureKey, reducers, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/users.effects';
import { UsersComponent } from './components/users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      usersStateFeatureKey,
      reducers,
      {
        metaReducers
      }
    ),
    EffectsModule.forFeature([UsersEffects]),
    ReactiveFormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { usersStateFeatureKey, reducers, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/users.effects';
import { UsersComponent } from './components/users/users.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UsersComponent
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
    UsersRoutingModule
  ]
})
export class UsersModule { }

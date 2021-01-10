import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Destroy } from 'src/app/shared/helpers/destroy';
import { User } from '../../models/User';
import { addUser } from '../../store/users.actions';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUserComponent extends Destroy {

  public userForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private store: Store
  ) { 
    super();
    this.userForm = this.fb.group({
      name: '',
      surname: '',
      age: ''
    });
  }

  public saveUser(): void {
    const user: Partial<User> = this.userForm.value;
    
    this.store.dispatch(addUser({ user }));
  }
}

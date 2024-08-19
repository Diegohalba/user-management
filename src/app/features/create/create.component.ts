import { Component, inject } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, } from '@angular/router';
import { FormComponent } from '../../shared/components/form/form.component';
import { User } from '../../shared/interfaces/user.interface';
import { BackToListComponent } from '../../shared/components/back-to-list/back-to-list.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormComponent, BackToListComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  usersService = inject(UsersService);

  matSnackBar = inject(MatSnackBar);

  router = inject(Router)

  onSubmit(user: User) {

    this.usersService.
      post(user).
      subscribe(() => {
        this.matSnackBar.open('User created! ', 'OK');

        this.router.navigateByUrl('/');
      });
  }
}

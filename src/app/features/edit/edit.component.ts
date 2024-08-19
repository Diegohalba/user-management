import { Component, inject } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../shared/interfaces/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormComponent } from '../../shared/components/form/form.component';
import { BackToListComponent } from '../../shared/components/back-to-list/back-to-list.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent, BackToListComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  usersService = inject(UsersService);
  matSnackBar = inject(MatSnackBar);

  router = inject(Router)

  user: User = inject(ActivatedRoute).snapshot.data['user'];


  onSubmit(user: User) {
    this.usersService.put(this.user.id, user).subscribe(() => {
        this.matSnackBar.open('User edited! ', 'OK')

        this.router.navigateByUrl('/');
      });
  }

}

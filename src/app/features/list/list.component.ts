import { Component, inject, signal } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../shared/interfaces/user.interface';
import { UsersService } from '../../shared/services/users.service';
import { filter } from 'rxjs';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';
import { NoItemsComponent } from './components/no-items/no-items.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule, NoItemsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  users = signal<User[]>(inject(ActivatedRoute).snapshot.data['users']);
  usersService = inject(UsersService);
  router = inject(Router);
  confirmationDialogService = inject(ConfirmationDialogService)


  onEdit(user: User) {
    this.router.navigate(['/edit-product', user.id]);
  }

  onDelete(user: User) {
    this.confirmationDialogService
      .openDialog()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
          this.usersService.delete(user.id).subscribe(() => {
            this.usersService.getAll().subscribe((users) => {
              this.users.set(users);
            });
          });
      });
  };
};

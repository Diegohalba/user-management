import { ChangeDetectionStrategy, Component, Inject, inject, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h2 mat-dialog-title>Delete user</h2>
    <mat-dialog-content>
      Would you like to delete user?
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onNo()">No</button>
      <button mat-flat-button (click)="onYes()" cdkFocusInitial>Yes</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationDialogComponent {

  matDialogRef = inject(MatDialogRef);

  onNo(){
    this.matDialogRef.close(false);
  }
  onYes(){
    this.matDialogRef.close(true);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  matDialog = inject(MatDialog);

  constructor() { }

  openDialog(): Observable<boolean>{
    return this.matDialog
      .open(ConfirmationDialogComponent)
      .afterClosed()
  }
}

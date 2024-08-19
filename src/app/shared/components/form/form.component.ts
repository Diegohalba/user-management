import { Component, EventEmitter, input, Output, } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  user = input<User | null>(null);

  form!: FormGroup;

  @Output() done = new EventEmitter<User>();

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl<string>(this.user()?.name ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),
      username: new FormControl<string>(this.user()?.username ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),
      email: new FormControl<string>(this.user()?.email ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),
    });
  };

  onSubmit(){
    const user = this.form.value as User;
    this.done.emit(user);
  }

}

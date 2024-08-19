import { Component, computed, EventEmitter, input, Output, } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../../../shared/interfaces/user.interface';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  user = input.required<User>();

  @Output () edit = new EventEmitter();
  @Output () delete = new EventEmitter();

  userName= computed(() => this.user().name);
  userId = computed(() => this.user().id);
  userUsername= computed(() => this.user().username);
  userEmail= computed(() => this.user().email);

  onEdit(){
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}

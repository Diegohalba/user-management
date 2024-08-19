import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { getUsers } from './shared/resolvers/get-users.resolver';
import { getUser } from './shared/resolvers/get-user.resolver';


export const routes: Routes = [
    {
      path: '',
      resolve: {
        users: getUsers
      },
      component: ListComponent
    },
    {
      path: 'create-user',
      loadComponent:() =>
        import('./features/create/create.component').then(
          (m) => m.CreateComponent
        ),
    },
    {
      path:'edit-product/:id',
      resolve: {
        user: getUser
      },
      loadComponent:() =>
        import('./features/edit/edit.component').then(
          (m) => m.EditComponent
        ),
    }

];

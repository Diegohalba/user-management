import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UserPayload } from '../interfaces/payload-user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  httpClient = inject(HttpClient);

  getAll(){
    return this.httpClient.get<User[]>('/api/users');
  }

  get(id: string){
    return this.httpClient.get<User>(`/api/users/${id}`);
  }

  post(payload: UserPayload){
    return this.httpClient.post('/api/users', payload);
  }

  put(id: string, payload: UserPayload){
    return this.httpClient.put(`/api/users/${id}`, payload);
  }

  delete(id: string){
    return this.httpClient.delete(`/api/users/${id}`);
  }
}

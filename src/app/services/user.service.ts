import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  createUser(): Observable<User> {
    return this.http.post<User>(this.baseUrl, {});
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(this.baseUrl + '/' + id, user);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(this.baseUrl + '/' + id);
  }

  markAsRegistered(id: string): Observable<User>{
    return this.http.put<User>(this.baseUrl + '/markAsRegistered' + '/' + id, {});
  }

}

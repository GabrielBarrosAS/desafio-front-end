import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { User, UserDetail } from '../util/dtos/UserDtos';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API = "http://localhost:8080/users/"

  constructor(
    private authService: AuthService,
    private http: HttpClient) { }

  getUsersById(id: number): Observable<UserDetail> {
    return this.http.get<UserDetail>(`${this.API}/${id}`).pipe(take(1))
  }
}

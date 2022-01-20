import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { User, UserDetail, UserPostDto, UserPutDto } from '../util/dtos/UserDtos';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API = "http://localhost:8080/users/"

  constructor(
    private authService: AuthService,
    private http: HttpClient) { }


  getUsers(): Observable<UserDetail[]> {
    return this.http.get<UserDetail[]>(this.API, this.authService.headerOptions())
  }

  getUsersById(id: number): Observable<UserDetail> {
    return this.http.get<UserDetail>(`${this.API}/${id}`).pipe(take(1))
  }

  create(newUser: UserPostDto): Observable<UserDetail> {

    return this.http.post<UserDetail>(this.API, newUser, this.authService.headerOptions());

  }

  update(userPut: UserPutDto): Observable<UserDetail> {
    console.log(userPut)
    return this.http.put<UserDetail>(this.API, userPut, this.authService.headerOptions())
  }
}

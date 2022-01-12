import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { CategoryDetail } from '../util/dtos/CategoryDetail.class';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly API = "http://localhost:8080/category"

  private categorys: CategoryDetail[] = []

  constructor(private http: HttpClient, private authService: AuthService) { }

  getCategorys(): Observable<CategoryDetail[]> {

    return this.http.get<CategoryDetail[]>(this.API).pipe(
      tap(res => {
        this.categorys = res
      })
    )
  }

  create(objPost: CategoryDetail): Observable<CategoryDetail> {

    let authorizationData = 'Basic ' + btoa(this.authService.getUsername() + ':' + this.authService.getPassword());

    const headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': authorizationData
      })
    };
    
    return this.http.post<CategoryDetail>(this.API,objPost, headerOptions).pipe(take(1))
  }

  update() {
    console.log("Atualizar categoria")
  }

}

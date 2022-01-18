import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { CategoryDetail, CategoryPostDto, CategoryPutDto } from '../util/dtos/CategoryDtos';
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

  getCategoryById(id:number): Observable<CategoryDetail> {

    return this.http.get<CategoryDetail>(`${this.API}/${id}`)

  }

  create(objPost: CategoryPostDto): Observable<CategoryDetail> {

    return this.http.post<CategoryDetail>(this.API, objPost, this.authService.headerOptions()).pipe(take(1))
  }

  update(categoryPut: CategoryPutDto): Observable<CategoryDetail> {
    return this.http.put<CategoryDetail>(this.API, categoryPut, this.authService.headerOptions()).pipe(take(1))
  }

  delete(id: number): Observable<CategoryDetail> {
    return this.http.delete<CategoryDetail>(`${this.API}/${id}`, this.authService.headerOptions()).pipe(take(1))
  }

}

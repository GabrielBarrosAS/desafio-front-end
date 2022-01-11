import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CategoryDetail } from '../util/dtos/CategoryDetail.class';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly API = "http://localhost:8080/category"

  private categorys: CategoryDetail[] = []

  constructor(private http: HttpClient) { }

  getCategorys(): Observable<CategoryDetail[]> {

    return this.http.get<CategoryDetail[]>(this.API).pipe(
      tap(res => {
        this.categorys = res
      })
    )
  }

  create(){
    console.log("Criar categoria no banco")
  }

  update(){
    console.log("Atualizar categoria")
  }

}

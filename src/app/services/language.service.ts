import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LanguageDetail } from '../util/dtos/LanguageDetail.class';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {


  private readonly API = "http://localhost:8080/language"

  private languages: LanguageDetail[] = []

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<LanguageDetail[]> {

    return this.http.get<LanguageDetail[]>(this.API).pipe(
      tap(res => this.languages = res)
    )
  }
}

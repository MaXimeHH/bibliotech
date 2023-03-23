import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Livre } from './livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private http: HttpClient) { }

  getTodoList(): Observable<Livre []> {
    return this.http.get<Livre[]>('api/livres').pipe(
      tap((response) => console.table(response)),
      catchError((error) => this.handleError(error, []))
    )
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}

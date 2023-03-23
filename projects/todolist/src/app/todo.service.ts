import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 
  constructor(private http: HttpClient) { }

  getTodoList(): Observable<Todo []> {
    return this.http.get<Todo[]>('api/todos').pipe(
      tap((response) => console.table(response)),
      catchError((error) => this.handleError(error, []))
    )
  }
  deleteTodo(): Observable<Todo []> {
    return this.http.delete<Todo[]>('api/todos').pipe(
      tap((response) => console.table(response)),
      catchError((error) => this.handleError(error, []))
    )
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}

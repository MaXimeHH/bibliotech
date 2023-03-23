import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'
import { Observable } from 'rxjs';
import { TODOS } from './mock-todo';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService implements InMemoryDbService{

  createDb() {
    const todos = TODOS;
    return { todos };
  }
}

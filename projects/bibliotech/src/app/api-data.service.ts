import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'
import { Observable } from 'rxjs';
import { LIVRES } from './mock-livre';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class ApiDataService implements InMemoryDbService{

  createDb() {
    const livres = LIVRES;
    return { livres };
   }
}

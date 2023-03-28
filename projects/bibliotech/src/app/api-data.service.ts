import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { LIVRES } from './mock-livre';
import { USER } from './mock-user';


@Injectable({
  providedIn: 'root'
})
export class ApiDataService implements InMemoryDbService{

  createDb() {
    const livres = LIVRES;
    const users = USER;

    return { livres, users };
  }
}

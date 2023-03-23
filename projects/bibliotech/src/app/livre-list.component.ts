import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LIVRES } from './mock-livre';
import { Livre } from './livre';
import { LivreService } from './livre.service';
 
@Component({
    selector: 'livre-todo-list',
    template: `
  <div>
    <article article data-theme="light">
      <nav>
        <ul>
          <li><strong>BIBLIO'Tech</strong></li>
        </ul>
        <li><a href="#" role="button" routerLink="/todo/add">Ajouter un Livre</a></li>
        <ul>
          <li><a href="#">Livre</a></li>
          <li><a href="#">Catégorie</a></li>
          <li><a href="#">Auteur</a></li>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
          <li><a href="#" role="button">Connexion</a></li>
        </ul>
      </nav>
    </article>
  </div>

  <p><strong>Les livres disponibles :</strong></p>

  `,
    styles: [`
   
  `],
})
export class LivreListComponent {
    title = 'bibliotech';
    livrelist = LIVRES;
  
    constructor(
        private router: Router,
        private livreService: LivreService
    ) { }
  
    ngOnInit() {
        this.livreService.getTodoList().subscribe(
            (livres) => this.livrelist = livres
        )
    }

    goToTodoAdd() {
        this.router.navigate(['/livre/add'])
    }
    selectTodo(id: number) {
        console.table(this.livrelist[id - 1]);
    }
}
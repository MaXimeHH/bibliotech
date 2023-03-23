import { Component, Input } from '@angular/core';
import { Livre } from '../livre';
import { LIVRES } from '../mock-livre';
import { LivreService } from '../livre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'livre',
  template: `
    <div *ngFor="let livre of livres">
      <article article data-theme="light" id="livre-{{livre.id}}" (change)="onCheck()">
        <header>Titre : {{ livre.title }}</header>
        Resumé : {{ livre.resume }}
        <footer>{{ livre.image }}</footer>
      </article>
    </div>
  `,
  styles: [],
})
export class LivreComponent {
  @Input('value')
  livre: Livre | undefined;
  livres: Livre[] = [];

  constructor(private router: Router, private livreService: LivreService) {}
  ngOnInit() {
    this.livreService.getTodoList().subscribe(livres => {
      this.livres = livres;
    });
  }

  onCheck() {
    LIVRES.filter((livre) => livre.id === this.livre?.id)[0];
  }

}
//<div *ngFor="let livre of livrelist">
//<article article data-theme="light">
// <header>Titre : {{ livre.title}}</header>
// Resumé : {{ livre.resume}}
// <footer>{{ livre.image}}</footer>
//</article>
//</div>

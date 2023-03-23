import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LIVRES } from '../mock-livre';
import { Livre } from '../livre';

@Component({
  selector: 'app-livre-add',
  template: `
      <h1>Nouveau Livre</h1>
 
 <a href="#" role="button" routerLink="/">Liste des livres</a>

 <form #addLivreForm="ngForm"  (ngSubmit)="onSubmitForm(addLivreForm)">
   <label for="title">
     Titre
     <input type="text" name="title" id="title" placeholder="Titre du livre" ngModel #title="ngModel"/>
   </label>

   <label for="content">Resumé :</label>
   <textarea name="content" id="content" rows="10" ngModel #resume="ngModel"></textarea>

   <label for="content">Image :</label>
   <textarea name="content" id="content" rows="10" ngModel #image="ngModel"></textarea>


   <button type="submit">Ajouter</button>
 </form>`,
  styles: ['']
})
export class LivreAddComponent {

  constructor(private router: Router) {}

  onSubmitForm(form: NgForm) {
    let formValue = (form.value) as Livre;
    LIVRES.push(new Livre(0, formValue.title, formValue.resume, formValue.image, new Date(), null))
    this.router.navigate(['/'])
  }

}

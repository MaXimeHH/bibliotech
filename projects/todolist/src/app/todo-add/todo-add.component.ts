import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TODOS } from '../mock-todo';
import { Todo } from '../todo';
 
@Component({
  selector: 'app-todo-add',
  template: `
    <h1>Nouvelle tâche</h1>
 
    <a href="#" role="button" routerLink="/">Liste des tâches</a>
 
    <form #addTaskForm="ngForm"  (ngSubmit)="onSubmitForm(addTaskForm)">
      <label for="title">
        Tâche à faire
        <input type="text" name="title" id="title" placeholder="Que dois-je faire ?" ngModel #title="ngModel"/>
      </label>
 
      <label for="content">Description :</label>
      <textarea name="content" id="content" rows="10" ngModel #content="ngModel"></textarea>
 
      <label for="author">
        Tâche à faire
        <input type="text" name="author" id="author" placeholder="John Doe" ngModel #author="ngModel"/>
      </label>
 
      <button type="submit">Ajouter</button>
    </form>
  `,
  styles: []
})
export class TodoAddComponent {

  constructor(private router: Router) {}

  onSubmitForm(form: NgForm) {
    let formValue = (form.value) as Todo;
    TODOS.push(new Todo(0, formValue.title, formValue.content, formValue.author, false, new Date(), null))
    this.router.navigate(['/'])
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TODOS } from './mock-todo';
import { Todo } from './todo';
import { TodoService } from './todo.service';
 
@Component({
  selector: 'app-todo-list',
    template: `
      <h1>Liste des Tâches à faire et terminées: </h1>

      <a href="#" role="button" [class.secondary]="!completedFilter" (click)="onClickTodo()">A faire</a>
      <a href="#"  role="button" [class.secondary]="completedFilter" (click)="onClickCompleted()">Terminées</a>
      <a href="#" role="button" class="contrast" routerLink="/todo/add">Ajouter une tâche</a>
    <div *ngFor="let todo of todoList">
      <todo *ngIf="!todo.isCompleted === completedFilter" [value]="todo"></todo>
    </div>
  `,
    styles: [`
      a{
        margin-left: 8px;
      }
  `],
})
export class TodoListComponent {
    todoList : Todo [] | undefined;

    completedFilter = false;

    constructor(
        private router: Router,
        private todoService: TodoService
    ) { }

    ngOnInit() {
        this.todoService.getTodoList().subscribe(
            (todos) => this.todoList = todos
        )
    }
    
    onClickTodo() {
        this.completedFilter = false;
    }
    onClickCompleted() {
        this.completedFilter = true;
    }

    goToTodoAdd() {
        this.router.navigate(['/todo/add'])
    }
}
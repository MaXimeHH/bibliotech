import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { TODOS } from '../mock-todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'todo',
  template: `      
  <article *ngIf="todo">
  <div class="grid">
    <label for="todo-{{todo.id}}">
      <input type="checkbox" id="todo-{{todo.id}}" name="todo-{{todo.id}}" [checked]="todo.isCompleted" (change)="onCheck()"/>
      {{ todo.title }}
    </label>
    <div class="action">
      <a href="#">Edit</a>
      <a href="#">Del</a>
    </div>
  </div>
</article>`,
  styles: [ `
  .action {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .action a,
  a {
    margin-left: 8px;
  }

  article {
    border: 2px solid transparent;
  }
`,]
})
export class TodoComponent {
  @Input('value')
  todo: Todo | undefined;

  constructor(
    private router: Router,
    private todoService: TodoService
) { }

  ngOnInit() {
    this.todoService.deleteTodo().subscribe(
        //(todos) => this.todo = todos
    )
}

  onCheck() {
    TODOS.filter((todo) => todo.id === this.todo?.id)[0].isCompleted = !this.todo?.isCompleted;
  }
}

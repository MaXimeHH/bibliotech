import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  {path: 'todo/add', component: TodoAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

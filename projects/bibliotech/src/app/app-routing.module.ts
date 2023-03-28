import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreListComponent } from './livre-list.component'
import { LivreAddComponent } from './livre-add/livre-add.component';

import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: '', component: LivreListComponent },
  {path: 'livre/add', component: LivreAddComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id/edit', component: UserEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

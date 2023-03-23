import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreListComponent } from './livre-list.component'
import { LivreAddComponent } from './livre-add/livre-add.component';

const routes: Routes = [
  { path: '', component: LivreListComponent },
  {path: 'livre/add', component: LivreAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

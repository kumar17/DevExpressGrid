import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridPocComponent } from './grid-poc/grid-poc.component';
import { RowpocComponent } from './rowpoc/rowpoc.component';


const routes: Routes = [
  { path: 'row', component: RowpocComponent },
  { path: 'list', component: GridPocComponent },
  { path: '', redirectTo: '/row', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

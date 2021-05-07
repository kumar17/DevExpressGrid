import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutotextComponent } from './autotext/autotext.component';
import { EditorComponent } from './editor/editor.component';
import { GridPocComponent } from './grid-poc/grid-poc.component';
import { RowpocComponent } from './rowpoc/rowpoc.component';
import { TreeviewComponent } from './treeview/treeview.component';


const routes: Routes = [
  { path: 'row', component: RowpocComponent },
  { path: 'list', component: GridPocComponent },
  { path: 'tree', component: TreeviewComponent },
  { path: 'autotext', component: AutotextComponent },
  { path: 'Editor', component: EditorComponent },
  { path: '', redirectTo: '/Editor', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

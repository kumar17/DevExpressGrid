import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridPocComponent } from './grid-poc/grid-poc.component';
import { DxAutocompleteModule, DxCheckBoxModule, DxDataGridModule, DxDropDownBoxModule, DxFilterBuilderModule, DxHtmlEditorModule, DxListModule, DxMenuModule, DxTagBoxModule, DxTemplateModule, DxTreeListModule } from 'devextreme-angular';
import { RowpocComponent } from './rowpoc/rowpoc.component';
import { DetailGridComponentComponent } from './detail-grid-component/detail-grid-component.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { AutotextComponent } from './autotext/autotext.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { DevexpressautoComponent } from './devexpressauto/devexpressauto.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    GridPocComponent,
    RowpocComponent,
    DetailGridComponentComponent,
    TreeviewComponent,
    AutotextComponent,
    MenuComponent,
    DevexpressautoComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxTemplateModule,
    DxTreeListModule,
    DxCheckBoxModule,
    DxListModule,
    DxDropDownBoxModule,
    DxTagBoxModule,
    DxAutocompleteModule,
    DxFilterBuilderModule,
    FormsModule,
    DxMenuModule,
    DxHtmlEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridPocComponent } from './grid-poc/grid-poc.component';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { RowpocComponent } from './rowpoc/rowpoc.component';
import { DetailGridComponentComponent } from './detail-grid-component/detail-grid-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GridPocComponent,
    RowpocComponent,
    DetailGridComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

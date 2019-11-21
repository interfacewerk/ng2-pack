import {StudiesCellComponent} from './table-example/studies-cell.component';
import {AppComponent} from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PipesModule, TableModule, InlineEditableModule } from '../../projects/ng2-pack/src/public-api';

@NgModule({
  imports: [
    BrowserModule,
    TableModule,
    InlineEditableModule,
    PipesModule
  ],
  declarations: [
    AppComponent,
    StudiesCellComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

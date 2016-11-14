import {InsertTemplateDirective} from './custom-cell/insert-template.directive';
import {CustomCellDirective} from './custom-cell/custom-cell.directive';
import {TableComponent} from './table.component';
import {TheadComponent} from './thead/thead.component';
import {TbodyComponent} from './tbody/tbody.component';
import {AddColumnComponent} from './add-column/add-column.component';
import {Select2Component} from './../select2/select2.component';
import {TdComponent} from './td/td.component';
import {ThComponent} from './th/th.component';
import {PipesModule} from './../pipes/';
import {I18nService} from './../services/i18n.service';

import {TableSortingService} from './table-sorting.service';
import {TableInitService} from './table-init.service';

import { DropdownModule} from 'ng2-dropdown';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent,
    TheadComponent,
    TbodyComponent,
    AddColumnComponent,
    Select2Component,
    TdComponent,
    ThComponent,
    CustomCellDirective,
    InsertTemplateDirective,
  ],
  exports: [
    TableComponent,
    TheadComponent,
    TbodyComponent,
    AddColumnComponent,
    Select2Component,
    TdComponent,
    ThComponent,
    CustomCellDirective,
  ],
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    DropdownModule
  ],
  providers: [
    TableSortingService,
    TableInitService,
    I18nService,
  ]
})
export class TableModule { }

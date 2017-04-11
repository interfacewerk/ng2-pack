import { InlineEditableModule } from './../inline-editable/inline-editable.module';
import {TableComponent} from './table.component';
import {TheadComponent} from './thead/thead.component';
import {TbodyComponent} from './tbody/tbody.component';
import {AddColumnComponent} from './add-column/add-column.component';
import {Select2Component} from './../select2/select2.component';
import {TdComponent} from './td/td.component';
import {ThComponent} from './th/th.component';
import { ArrayCellComponent } from './td/array-cell/array-cell.component';
import { ObjectCellComponent } from './td/object-cell/object-cell.component';
import {PipesModule} from './../pipes/';
import {DefaultValuePipe} from './../pipes/default-value/default-value.pipe';
import {FormatColumnPipe} from './pipes/format-column.pipe';
import {I18nService} from './../services/i18n.service';

import {TableSortingService} from './table-sorting.service';
import {TableInitService} from './table-init.service';
import { TableReducerService } from './table-reducer.service';
import { TableStateService } from './table-state.service';

import { DropdownModule} from 'ngx-dropdown';
import { SortableModule } from './../sortable/sortable.module';

import { CommonModule, UpperCasePipe, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    DropdownModule,
    SortableModule,
    InlineEditableModule,
  ],
  declarations: [
    TableComponent,
    TheadComponent,
    TbodyComponent,
    AddColumnComponent,
    Select2Component,
    TdComponent,
    ThComponent,
    ObjectCellComponent,
    ArrayCellComponent,
    FormatColumnPipe,
  ],
  exports: [
    TableComponent,
    TheadComponent,
    TbodyComponent,
    AddColumnComponent,
    Select2Component,
    TdComponent,
    ThComponent,
    ObjectCellComponent,
    ArrayCellComponent,
    FormatColumnPipe,
  ],
  providers: [
    TableSortingService,
    TableInitService,
    TableStateService,
    TableReducerService,
    I18nService,
    DefaultValuePipe,
    DatePipe
  ]
})
export class TableModule { }

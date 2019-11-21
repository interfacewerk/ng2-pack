/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TableComponent } from './table.component';
import { TheadComponent } from './thead/thead.component';
import { TbodyComponent } from './tbody/tbody.component';
import { AddColumnComponent } from './add-column/add-column.component';
import { Select2Component } from './../select2/select2.component';
import { TdComponent } from './td/td.component';
import { ThComponent } from './th/th.component';
import { PipesModule } from './../pipes/';
import { DefaultValuePipe } from './../pipes/default-value/default-value.pipe';
import { FormatColumnPipe } from './pipes/format-column.pipe';
import { I18nService } from './../services/i18n.service';
import { TableSortingService } from './table-sorting.service';
import { TableInitService } from './table-init.service';
import { DropdownModule } from 'ngx-dropdown';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        PipesModule,
                        CommonModule,
                        FormsModule,
                        DropdownModule
                    ],
                    declarations: [
                        TableComponent,
                        TheadComponent,
                        TbodyComponent,
                        AddColumnComponent,
                        Select2Component,
                        TdComponent,
                        ThComponent,
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
                        FormatColumnPipe,
                    ],
                    providers: [
                        TableSortingService,
                        TableInitService,
                        I18nService,
                        DefaultValuePipe
                    ]
                },] }
    ];
    return TableModule;
}());
export { TableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDaEUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUV2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRTdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QztJQUFBO0lBa0MyQixDQUFDOztnQkFsQzNCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsY0FBYztxQkFDZjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCxnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLGdCQUFnQjtxQkFDakI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLGdCQUFnQjtxQkFDakI7aUJBQ0Y7O0lBQzBCLGtCQUFDO0NBQUEsQUFsQzVCLElBa0M0QjtTQUFmLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RhYmxlQ29tcG9uZW50fSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQge1RoZWFkQ29tcG9uZW50fSBmcm9tICcuL3RoZWFkL3RoZWFkLmNvbXBvbmVudCc7XG5pbXBvcnQge1Rib2R5Q29tcG9uZW50fSBmcm9tICcuL3Rib2R5L3Rib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQge0FkZENvbHVtbkNvbXBvbmVudH0gZnJvbSAnLi9hZGQtY29sdW1uL2FkZC1jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7U2VsZWN0MkNvbXBvbmVudH0gZnJvbSAnLi8uLi9zZWxlY3QyL3NlbGVjdDIuY29tcG9uZW50JztcbmltcG9ydCB7VGRDb21wb25lbnR9IGZyb20gJy4vdGQvdGQuY29tcG9uZW50JztcbmltcG9ydCB7VGhDb21wb25lbnR9IGZyb20gJy4vdGgvdGguY29tcG9uZW50JztcbmltcG9ydCB7UGlwZXNNb2R1bGV9IGZyb20gJy4vLi4vcGlwZXMvJztcbmltcG9ydCB7RGVmYXVsdFZhbHVlUGlwZX0gZnJvbSAnLi8uLi9waXBlcy9kZWZhdWx0LXZhbHVlL2RlZmF1bHQtdmFsdWUucGlwZSc7XG5pbXBvcnQge0Zvcm1hdENvbHVtblBpcGV9IGZyb20gJy4vcGlwZXMvZm9ybWF0LWNvbHVtbi5waXBlJztcbmltcG9ydCB7STE4blNlcnZpY2V9IGZyb20gJy4vLi4vc2VydmljZXMvaTE4bi5zZXJ2aWNlJztcblxuaW1wb3J0IHtUYWJsZVNvcnRpbmdTZXJ2aWNlfSBmcm9tICcuL3RhYmxlLXNvcnRpbmcuc2VydmljZSc7XG5pbXBvcnQge1RhYmxlSW5pdFNlcnZpY2V9IGZyb20gJy4vdGFibGUtaW5pdC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGV9IGZyb20gJ25neC1kcm9wZG93bic7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBQaXBlc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgRHJvcGRvd25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGFibGVDb21wb25lbnQsXG4gICAgVGhlYWRDb21wb25lbnQsXG4gICAgVGJvZHlDb21wb25lbnQsXG4gICAgQWRkQ29sdW1uQ29tcG9uZW50LFxuICAgIFNlbGVjdDJDb21wb25lbnQsXG4gICAgVGRDb21wb25lbnQsXG4gICAgVGhDb21wb25lbnQsXG4gICAgRm9ybWF0Q29sdW1uUGlwZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRhYmxlQ29tcG9uZW50LFxuICAgIFRoZWFkQ29tcG9uZW50LFxuICAgIFRib2R5Q29tcG9uZW50LFxuICAgIEFkZENvbHVtbkNvbXBvbmVudCxcbiAgICBTZWxlY3QyQ29tcG9uZW50LFxuICAgIFRkQ29tcG9uZW50LFxuICAgIFRoQ29tcG9uZW50LFxuICAgIEZvcm1hdENvbHVtblBpcGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFRhYmxlU29ydGluZ1NlcnZpY2UsXG4gICAgVGFibGVJbml0U2VydmljZSxcbiAgICBJMThuU2VydmljZSxcbiAgICBEZWZhdWx0VmFsdWVQaXBlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVNb2R1bGUgeyB9XG4iXX0=
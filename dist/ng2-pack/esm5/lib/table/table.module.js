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
import { PipesModule } from './../pipes/pipes.module';
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
                        FormatColumnPipe
                    ],
                    exports: [
                        TableComponent,
                        TheadComponent,
                        TbodyComponent,
                        AddColumnComponent,
                        Select2Component,
                        TdComponent,
                        ThComponent,
                        FormatColumnPipe
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDaEUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDN0UsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRXZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE9BQU8sRUFBRSxjQUFjLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdDO0lBQUE7SUFrQzJCLENBQUM7O2dCQWxDM0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxjQUFjO3FCQUNmO29CQUNELFlBQVksRUFBRTt3QkFDWixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsZ0JBQWdCO3FCQUNqQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsZ0JBQWdCO3FCQUNqQjtpQkFDRjs7SUFDMEIsa0JBQUM7Q0FBQSxBQWxDNUIsSUFrQzRCO1NBQWYsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGFibGVDb21wb25lbnR9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7VGhlYWRDb21wb25lbnR9IGZyb20gJy4vdGhlYWQvdGhlYWQuY29tcG9uZW50JztcbmltcG9ydCB7VGJvZHlDb21wb25lbnR9IGZyb20gJy4vdGJvZHkvdGJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7QWRkQ29sdW1uQ29tcG9uZW50fSBmcm9tICcuL2FkZC1jb2x1bW4vYWRkLWNvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWxlY3QyQ29tcG9uZW50fSBmcm9tICcuLy4uL3NlbGVjdDIvc2VsZWN0Mi5jb21wb25lbnQnO1xuaW1wb3J0IHtUZENvbXBvbmVudH0gZnJvbSAnLi90ZC90ZC5jb21wb25lbnQnO1xuaW1wb3J0IHtUaENvbXBvbmVudH0gZnJvbSAnLi90aC90aC5jb21wb25lbnQnO1xuaW1wb3J0IHtQaXBlc01vZHVsZX0gZnJvbSAnLi8uLi9waXBlcy9waXBlcy5tb2R1bGUnO1xuaW1wb3J0IHtEZWZhdWx0VmFsdWVQaXBlfSBmcm9tICcuLy4uL3BpcGVzL2RlZmF1bHQtdmFsdWUvZGVmYXVsdC12YWx1ZS5waXBlJztcbmltcG9ydCB7Rm9ybWF0Q29sdW1uUGlwZX0gZnJvbSAnLi9waXBlcy9mb3JtYXQtY29sdW1uLnBpcGUnO1xuaW1wb3J0IHtJMThuU2VydmljZX0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9pMThuLnNlcnZpY2UnO1xuXG5pbXBvcnQge1RhYmxlU29ydGluZ1NlcnZpY2V9IGZyb20gJy4vdGFibGUtc29ydGluZy5zZXJ2aWNlJztcbmltcG9ydCB7VGFibGVJbml0U2VydmljZX0gZnJvbSAnLi90YWJsZS1pbml0LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZX0gZnJvbSAnbmd4LWRyb3Bkb3duJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUGlwZXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIERyb3Bkb3duTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRhYmxlQ29tcG9uZW50LFxuICAgIFRoZWFkQ29tcG9uZW50LFxuICAgIFRib2R5Q29tcG9uZW50LFxuICAgIEFkZENvbHVtbkNvbXBvbmVudCxcbiAgICBTZWxlY3QyQ29tcG9uZW50LFxuICAgIFRkQ29tcG9uZW50LFxuICAgIFRoQ29tcG9uZW50LFxuICAgIEZvcm1hdENvbHVtblBpcGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRhYmxlQ29tcG9uZW50LFxuICAgIFRoZWFkQ29tcG9uZW50LFxuICAgIFRib2R5Q29tcG9uZW50LFxuICAgIEFkZENvbHVtbkNvbXBvbmVudCxcbiAgICBTZWxlY3QyQ29tcG9uZW50LFxuICAgIFRkQ29tcG9uZW50LFxuICAgIFRoQ29tcG9uZW50LFxuICAgIEZvcm1hdENvbHVtblBpcGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVGFibGVTb3J0aW5nU2VydmljZSxcbiAgICBUYWJsZUluaXRTZXJ2aWNlLFxuICAgIEkxOG5TZXJ2aWNlLFxuICAgIERlZmF1bHRWYWx1ZVBpcGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZU1vZHVsZSB7IH1cbiJdfQ==
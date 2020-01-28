import { PipeTransform } from '@angular/core';
export declare class DefaultValuePipe implements PipeTransform {
    transform(value: any, defaultValue?: any, args?: any): any;
    private isEmptyString;
}

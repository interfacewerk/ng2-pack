import { I18nService } from './../../services/i18n.service';
import { PipeTransform } from '@angular/core';
export declare class TPipe implements PipeTransform {
    private i18nService;
    constructor(i18nService: I18nService);
    transform(value: any, args?: any): any;
}

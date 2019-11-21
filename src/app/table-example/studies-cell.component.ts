
import {Component, Input} from '@angular/core';
import { ColumnState } from '../../../projects/ng2-pack/src/public-api';

@Component({
  selector: 'iw-studies-cell',
  templateUrl: 'studies-cell.component.html',
})
export class StudiesCellComponent {
  @Input() row: any;
  @Input() col: ColumnState;

  constructor() {}

  isSubColumnVisible(subcolumn: string): boolean {
    return (this.col.activeFields.indexOf(subcolumn) !== -1);
  }

  get allSubfieldsHidden(): boolean {
    return this.col.activeFields.length === 0;
  }
}

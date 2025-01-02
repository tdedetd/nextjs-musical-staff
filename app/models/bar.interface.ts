import { BarTypes } from './bar-types.enum';
import { StaffBarClef } from './staff-bar-clef.interface';

export interface Bar {
  type?: BarTypes;
  clefs: StaffBarClef[];
}

import { BarTypes } from './bar-types.enum';
import { IStaffBarClef } from './staff-bar-clef.interface';

export interface IBar {
  type?: BarTypes;
  clefs: IStaffBarClef[];
}

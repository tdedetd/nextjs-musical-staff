import { IStaffViewLineItem } from './staff-view-line-item.interface';

export interface IStaffViewLine {
  firstBarIndex: number;
  items: IStaffViewLineItem[];
}

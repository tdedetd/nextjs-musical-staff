import { IBar } from '@/models/bar.interface';
import { StaffViewLineItemTypes } from './staff-view-line-item-types.enum';

export type IStaffViewLineItem = {
  type: Extract<StaffViewLineItemTypes, StaffViewLineItemTypes.Bar>,
  bar: IBar,
} | {
  type: Exclude<StaffViewLineItemTypes, StaffViewLineItemTypes.Bar>,
};

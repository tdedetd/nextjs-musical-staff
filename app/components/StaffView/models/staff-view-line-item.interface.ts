import { Bar } from '@/models/bar.interface';
import { StaffViewLineItemTypes } from './staff-view-line-item-types.enum';

export type StaffViewLineItem = {
  type: Extract<StaffViewLineItemTypes, StaffViewLineItemTypes.Bar>,
  bar: Bar,
} | {
  type: Exclude<StaffViewLineItemTypes, StaffViewLineItemTypes.Bar>,
};

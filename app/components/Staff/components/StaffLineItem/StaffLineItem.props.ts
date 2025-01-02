import { IStaff } from '@/models/staff.interface';
import { IStaffViewLineItem } from '../../models/staff-view-line-item.interface';

export interface StaffLineItemProps {
  item: IStaffViewLineItem;
  staff: IStaff;
}

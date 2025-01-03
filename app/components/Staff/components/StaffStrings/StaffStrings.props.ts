import { IStaff } from '@/models/staff.interface';
import { IStaffViewLineItem } from '../../models/staff-view-line-item.interface';

export interface StaffStringsProps {
  className?: string;
  item: IStaffViewLineItem;
  staff: IStaff;
}

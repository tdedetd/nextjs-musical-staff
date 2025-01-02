import { IStaff } from '@/models/staff.interface';
import { IStaffViewLine } from '../../models/staff-view-line.interface';

export interface StaffLineProps {
  line: IStaffViewLine;
  staff: IStaff;
}

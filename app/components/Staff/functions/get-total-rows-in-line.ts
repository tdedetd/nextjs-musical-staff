import { IStaff } from '@/models/staff.interface';

export function getTotalRowsInLine(staff: IStaff): number {
  const clefsCount = staff.clefs.length;
  return clefsCount * 3 + (clefsCount - 1);
}

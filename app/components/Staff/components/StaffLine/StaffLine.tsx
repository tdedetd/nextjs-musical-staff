import { JSX } from 'react';
import { StaffLineProps } from './StaffLine.props';
import styles from './StaffLine.module.css';
import { StaffLineItem } from '../StaffLineItem/StaffLineItem';
import { IStaff } from '@/models/staff.interface';
import { getTotalRowsInLine } from '../../functions/get-total-rows-in-line';
import { IStaffViewLine } from '../../models/staff-view-line.interface';
import { StaffViewLineItemTypes } from '../../models/staff-view-line-item-types.enum';
import { staffLineItemSizeClef } from '../../constants/staff-line-item-size-clef';
import { staffLineItemSizeSignature } from '../../constants/staff-line-item-size-signature';
import { getAccidentalSignesForTonality } from '@/utils/functions/get-accidental-signes-for-tonality';
import { staffLineItemSizeTonalitySign } from '../../constants/staff-line-item-size-tonality-sign';

function getGridTemplateRows(staff: IStaff): string {
  return `repeat(${getTotalRowsInLine(staff)}, auto)`;
}

function getGridTemplateColumns(line: IStaffViewLine, staff: IStaff): string {
  return line.items.map((item) => {
    return item.type === StaffViewLineItemTypes.Bar
      ? '1fr'
      : item.type === StaffViewLineItemTypes.Clef
      ? `${staffLineItemSizeClef}px`
      : item.type === StaffViewLineItemTypes.Signature
      ? `${staffLineItemSizeSignature}px`
      : `${getAccidentalSignesForTonality(staff.tonality, staff.scale).length * staffLineItemSizeTonalitySign}px`;
  }).join(' ');
}

export function StaffLine({ line, staff }: StaffLineProps): JSX.Element {
  const gridTemplateRows = getGridTemplateRows(staff);
  const gridTemplateColumns = getGridTemplateColumns(line, staff);

  return (
    <div className={styles.grid} style={{ gridTemplateRows, gridTemplateColumns }}>{
      line.items.map((item, index) => (
        <StaffLineItem key={index} item={item} staff={staff} />
      ))
    }</div>
  );
}

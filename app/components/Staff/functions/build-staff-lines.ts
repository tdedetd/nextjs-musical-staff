import { IStaff } from '@/models/staff.interface';
import { IStaffViewLine } from '../models/staff-view-line.interface';
import { IStaffViewLineItem } from '../models/staff-view-line-item.interface';
import { StaffViewLineItemTypes } from '../models/staff-view-line-item-types.enum';
import { getAccidentalSignesForTonality } from '../../../utils/functions/get-accidental-signes-for-tonality';
import { staffLineItemSizeClef } from '../constants/staff-line-item-size-clef';
import { staffLineItemSizeTonalitySign } from '../constants/staff-line-item-size-tonality-sign';
import { staffLineItemSizeSignature } from '../constants/staff-line-item-size-signature';
import { IBar } from '@/models/bar.interface';
import { staffLineItemSizeNote } from '../constants/staff-line-item-size-note';

export function buildStaffLines(staff: IStaff, containerWidth: number): IStaffViewLine[] {
  const lines: IStaffViewLine[] = [];

  let currentLineIndex = 0;
  let { line, width } = getNewLine(currentLineIndex, 0, staff);

  staff.bars.forEach((bar, barIndex) => {
    const barSize = getBarSize(bar);
    if (width + barSize > containerWidth) {
      lines.push(line);
      currentLineIndex += 1;
      const lineInfo = getNewLine(currentLineIndex, barIndex, staff);
      line = lineInfo.line;
      width = lineInfo.width;
    }

    line.items.push({ type: StaffViewLineItemTypes.Bar, bar });
    width += barSize;
  });
  lines.push(line);
  return lines;
}

function getNewLine(index: number, barIndex: number, staff: IStaff): { line: IStaffViewLine, width: number } {
  let items: IStaffViewLineItem[] = [
    { type: StaffViewLineItemTypes.Clef },
    { type: StaffViewLineItemTypes.TonalitySign },
  ];

  const tonalitySignes = getAccidentalSignesForTonality(staff.tonality, staff.scale);
  let width = staffLineItemSizeClef + staffLineItemSizeTonalitySign * tonalitySignes.length;

  if (index === 0) {
    items = [...items, { type: StaffViewLineItemTypes.Signature }];
    width += staffLineItemSizeSignature;
  }

  return {
    line: {
      items,
      firstBarIndex: barIndex,
    },
    width,
  };
}

function getBarSize(bar: IBar): number {
  return Math.max(...bar.clefs.map((clef) => clef.notes.length)) * staffLineItemSizeNote;
}

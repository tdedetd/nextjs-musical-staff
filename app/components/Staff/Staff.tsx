import { JSX } from 'react';
import { StaffProps } from './Staff.props';
import styles from './Staff.module.css';
import { buildStaffLines } from './functions/build-staff-lines';
import { StaffLine } from './components/StaffLine/StaffLine';

export function Staff({ staff, width }: StaffProps): JSX.Element {
  const lines = buildStaffLines(staff, width);
  return (
    <div className={styles.container}>{
      lines.map((line, index) => (
        <StaffLine key={index} line={line} staff={staff} />
      ))
    }</div>
  );
}

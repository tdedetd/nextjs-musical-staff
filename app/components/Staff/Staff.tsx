import { JSX } from 'react';
import { StaffProps } from './Staff.props';
import styles from './Staff.module.css';
import { buildStaffLines } from './functions/build-staff-lines';

export function Staff({ staff, width }: StaffProps): JSX.Element {
  const lines = buildStaffLines(staff, width);
  return (
    <div className={styles.container}>

    </div>
  );
}

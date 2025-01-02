import { JSX } from 'react';
import { StaffViewProps } from './StaffView.props';
import styles from './StaffView.module.css';
import { buildStaffLines } from './functions/build-staff-lines';

export function StaffView({ staff, width }: StaffViewProps): JSX.Element {
  const lines = buildStaffLines(staff, width);
  return (
    <div className={styles.container}>

    </div>
  );
}

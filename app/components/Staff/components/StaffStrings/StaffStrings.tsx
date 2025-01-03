'use client';

import { JSX, useLayoutEffect, useRef, useState } from 'react';
import { StaffStringsProps } from './StaffStrings.props';
import styles from './StaffStrings.module.css';
import classNames from 'classnames';
import { staffStringsCount } from '@/utils/constants/staff-strings-count';

export function StaffStrings({ className, item, staff }: StaffStringsProps): JSX.Element {

  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setContainerHeight(containerRef.current?.offsetHeight ?? 0);
  });

  const stepPx = containerHeight / (staffStringsCount * 2 - 2);

  const containerClass = classNames(...[
    className,
    styles.strings
  ].filter(Boolean));

  return (
    <div className={containerClass} ref={containerRef}>{
      Array.from(Array(staffStringsCount).keys()).map((i) => (
        <div key={i} className={styles.string}></div>
      ))
    }</div>
  );
}

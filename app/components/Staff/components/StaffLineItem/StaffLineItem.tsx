import React, { JSX } from 'react';
import { StaffLineItemProps } from './StaffLineItem.props';
import { StaffViewLineItemTypes } from '../../models/staff-view-line-item-types.enum';
import classNames from 'classnames';
import styles from './StaffLineItem.module.css';

export function StaffLineItem({ item, staff }: StaffLineItemProps): JSX.Element {
  const isBar = item.type === StaffViewLineItemTypes.Bar;
  return (
    <>{
      staff.clefs.map((clef, index) => {
        const isLast = index === staff.clefs.length - 1;
        return (
          <React.Fragment key={index}>
            <div className={classNames({ [styles.barBorder]: isBar && index > 0 })}></div>
            <div className={classNames({ [styles.barBorder]: isBar })}></div>
            <div className={classNames({ [styles.barBorder]: isBar && !isLast })}></div>
            {!isLast && (
              <div className={classNames(
                styles.spacing,
                { [styles.barBorder]: isBar }
              )} />
            )}
          </React.Fragment>
        )
      })
    }</>
  );
}

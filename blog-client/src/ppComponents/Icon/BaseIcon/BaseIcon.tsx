import React, { HTMLAttributes } from 'react';
import styles from './BaseIcon.less';
import cn from 'classnames';

interface BaseIconProps extends HTMLAttributes<HTMLSpanElement> {}

const BaseIcon: React.FC<BaseIconProps> = (props) => {
  const { children, className } = props;
  return (
    <span className={cn(styles.ppIcon, className)} role="img">
      {children}
    </span>
  );
};
export default BaseIcon;

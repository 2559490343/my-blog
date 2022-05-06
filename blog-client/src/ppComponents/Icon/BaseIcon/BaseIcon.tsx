import React, { HTMLAttributes } from 'react';
import styles from './BaseIcon.less';
import cn from 'classnames';

interface BaseIconProps extends HTMLAttributes<HTMLSpanElement> {}

const BaseIcon: React.FC<BaseIconProps> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <span className={cn(styles.ppIcon, className)} role="img">
      {React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {
          stroke: 'currentColor',
          strokeWidth: '3',
          fill: 'none',
          // transform: `scale(1 1)`,
          viewBox: '0,0,40,40',
          ...restProps,
        });
      })}
    </span>
  );
};
export default BaseIcon;

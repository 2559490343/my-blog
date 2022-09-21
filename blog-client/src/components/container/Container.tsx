import React, { HTMLAttributes } from 'react';
import styles from './Container.less';
import cn from 'classnames';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container = (props: ContainerProps) => {
  const { children, className, ...restProps } = props;

  return (
    <div className={cn(styles.root, className)} {...restProps}>
      {children}
    </div>
  );
};
export default Container;

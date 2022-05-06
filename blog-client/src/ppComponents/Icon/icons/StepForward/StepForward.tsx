import React from 'react';
import BaseIcon from '../../BaseIcon';
import styles from './StepForward.less';
import { ReactComponent as StepForwardIcon } from '../../svgs/stepForward.svg';

const StepForward = () => {
  return (
    <BaseIcon className={styles.root}>
      <StepForwardIcon />
    </BaseIcon>
  );
};
export default StepForward;

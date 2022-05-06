import React from 'react';
import BaseIcon from '../../BaseIcon';
import styles from './StepBackward.less';
import { ReactComponent as StepBackwardIcon } from '../../svgs/stepBackward.svg';
const StepBackward = () => {
  return (
    <BaseIcon className={styles.root}>
      <StepBackwardIcon />
    </BaseIcon>
  );
};
export default StepBackward;

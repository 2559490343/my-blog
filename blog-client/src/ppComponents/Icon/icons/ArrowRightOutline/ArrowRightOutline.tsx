import React from 'react';
import styles from './ArrowRightOutline.less';
import BaseIcon from '../../BaseIcon';
import { ReactComponent as DownOutlineIcon } from '../../svgs/DownOutline.svg';
const RightOutline = () => {
  return (
    <BaseIcon>
      <DownOutlineIcon className={styles.icon} />
    </BaseIcon>
  );
};
export default RightOutline;

import React from 'react';
import BaseIcon from '../../BaseIcon';
import { ReactComponent as DownOutlineIcon } from '../../svgs/DownOutline.svg';
import styles from './ArrowLeftOutline.less';
const LeftOutline = () => {
  return (
    <BaseIcon>
      <DownOutlineIcon className={styles.icon} />
    </BaseIcon>
  );
};
export default LeftOutline;

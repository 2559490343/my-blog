import React from 'react';
import BaseIcon from '../../BaseIcon';
import styles from './ArrowUpOutline.less';
import { ReactComponent as DownOutlineIcon } from '../../svgs/DownOutline.svg';
const UpOutline = () => {
  return (
    <BaseIcon>
      <DownOutlineIcon className={styles.icon} />
    </BaseIcon>
  );
};
export default UpOutline;

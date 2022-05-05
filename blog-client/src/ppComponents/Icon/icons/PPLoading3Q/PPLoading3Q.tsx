import React from 'react';
import styles from './PPLoading3Q.less';
import { ReactComponent as LoadingIcon3Q } from '../../svgs/loading3Q.svg';
import BaseIcon from '../../BaseIcon';
const PPLoading3Q = () => {
  return (
    <BaseIcon className={styles.root}>
      <LoadingIcon3Q />
    </BaseIcon>
  );
};
export default PPLoading3Q;

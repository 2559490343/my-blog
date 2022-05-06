import React from 'react';
import styles from './Loading.less';
import { ReactComponent as LoadingIcon } from '../../svgs/loading.svg';
import BaseIcon from '../../BaseIcon';
const PPLoading = () => {
  return (
    <BaseIcon className={styles.root}>
      <LoadingIcon />
    </BaseIcon>
  );
};
export default PPLoading;

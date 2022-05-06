import React from 'react';
import styles from './CaretLeftOutline.less';
import BaseIcon from '../../BaseIcon';
import { ReactComponent as CaretDownOutlineIcon } from '../../svgs/CaretDownOutline.svg';
const CaretLeftOutline = () => {
  return (
    <BaseIcon>
      <CaretDownOutlineIcon className={styles.icon} />
    </BaseIcon>
  );
};
export default CaretLeftOutline;

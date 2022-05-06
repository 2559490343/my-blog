import React from 'react';
import styles from './CaretRightOutline.less';
import BaseIcon from '../../BaseIcon';
import { ReactComponent as CaretDownOutlineIcon } from '../../svgs/CaretDownOutline.svg';
const CaretRightOutline = () => {
  return (
    <BaseIcon>
      <CaretDownOutlineIcon className={styles.icon} />
    </BaseIcon>
  );
};
export default CaretRightOutline;

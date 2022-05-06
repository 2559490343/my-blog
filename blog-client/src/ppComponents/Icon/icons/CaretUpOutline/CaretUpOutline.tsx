import React from 'react';
import styles from './CaretUpOutline.less';
import BaseIcon from '../../BaseIcon';
import { ReactComponent as CaretDownOutlineIcon } from '../../svgs/CaretDownOutline.svg';
const CaretUpOutline = () => {
  return (
    <BaseIcon>
      <CaretDownOutlineIcon className={styles.icon}/>
    </BaseIcon>
  );
};
export default CaretUpOutline;

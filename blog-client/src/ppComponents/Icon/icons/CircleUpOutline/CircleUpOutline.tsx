import React from 'react';
import BaseIcon from '../../BaseIcon';
import { ReactComponent as CircleDownOutlineIcon } from '../../svgs/CircleDownOutline.svg';
const CircleUpOutline = () => {
  return (
    <BaseIcon>
      <CircleDownOutlineIcon style={{ transform: 'rotate(180deg)' }} />
    </BaseIcon>
  );
};
export default CircleUpOutline;

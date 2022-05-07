import React from 'react';
import BaseIcon from '../../BaseIcon';
import { ReactComponent as CircleDownOutlineIcon } from '../../svgs/CircleDownOutline.svg';
const CircleRightOutline = () => {
  return (
    <BaseIcon>
      <CircleDownOutlineIcon style={{transform:'rotate(270deg)'}} />
    </BaseIcon>
  );
};
export default CircleRightOutline;

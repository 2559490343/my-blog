import React from 'react';
import BaseIcon from '../../BaseIcon';
import { ReactComponent as CircleDownOutlineIcon } from '../../svgs/CircleDownOutline.svg';
const CircleLeftOutline = () => {
  return (
    <BaseIcon>
      <CircleDownOutlineIcon style={{transform:'rotate(90deg)'}}/>
    </BaseIcon>
  );
};
export default CircleLeftOutline;

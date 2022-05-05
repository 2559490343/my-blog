import React, { useRef } from 'react';
import styles from './PPLoading.less';
import { ReactComponent as TestIcon } from '../../svgs/test.svg';
import BaseIcon from '../../BaseIcon';
import useSvgInfo from '@/hooks/useSvgInfo';
const PPLoading = () => {
  const testRef = useRef(null);
  const { pathElement, svgWidth, strokeWidth, svgElement } =
    useSvgInfo(testRef);
  svgElement.set('fill', 'none');
  pathElement.set('d', `M${svgWidth / 2},${strokeWidth} a25,25,0,0,1,25,25`);
  pathElement.set('stroke-width', strokeWidth);
  
  return (
    <BaseIcon className={styles.root}>
      <TestIcon className={styles.icon} ref={testRef} />
    </BaseIcon>
  );
};
export default PPLoading;

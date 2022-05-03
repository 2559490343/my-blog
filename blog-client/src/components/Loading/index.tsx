import styles from './index.less';
import { Spin } from 'antd';
import LoadingIcon from './components/LoadingIcon';

export default function Loading() {
  return (
    <div className={styles.myLoading}>
      <Spin tip="" indicator={<LoadingIcon />} />
    </div>
  );
}

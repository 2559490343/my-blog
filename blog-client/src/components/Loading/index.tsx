import styles from './index.less';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const loadingIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

export default function Loading() {
  return (
    <div className={styles.myLoading}>
      <Spin tip="加载中..." indicator={loadingIcon} />
    </div>
  );
}

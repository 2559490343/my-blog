import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useBoolean, useUpdateEffect } from 'ahooks';
import { Space } from 'antd';
import { useEffect } from 'react';
import styles from './SortItem.less';
import cn from 'classnames';

interface SortItemProps {
  name: string;
  label: string;
  onChange: (name: string, sorter: boolean) => void;
  active: boolean;
}

const SortItem = (props: SortItemProps) => {
  const { name, label, onChange, active } = props;
  const [sorted, { toggle, set }] = useBoolean(false);

  const handleClick = () => {
    if (active) {
      onChange(name, !sorted);
      toggle();
    } else {
      onChange(name, false);
    }
  };

  useEffect(() => {
    set(false);
  }, [active]);

  return (
    <div
      className={cn(styles.root, { [styles.active]: active })}
      onClick={handleClick}
    >
      <Space size={6}>
        <span>{label}</span>
        {sorted ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
      </Space>
    </div>
  );
};
export default SortItem;

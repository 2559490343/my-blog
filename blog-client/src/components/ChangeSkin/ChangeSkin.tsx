import { SkinFilled } from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import { Modal, Tabs, Tooltip } from 'antd';
import React from 'react';
import styles from './ChangeSkin.less';
import CustomImg from './components/CustomImg';
import ImgList from './components/ImgList';

const ChangeSkin = () => {
  const [visible, { toggle }] = useBoolean(false);
  const tabs = ['二次元', '游戏', '风景', '自定义'];

  return (
    <div className={styles.root}>
      <Tooltip placement="bottom" title="换壁纸">
        <SkinFilled className={styles.icon} onClick={toggle} />
      </Tooltip>
      <Modal
        open={visible}
        className={styles.modal}
        width="50%"
        onCancel={toggle}
        cancelText="取消"
        okText="确定"
        title="更换主题壁纸"
        footer={null}
      >
        <Tabs
          tabPosition="left"
          items={tabs.map((it) => ({
            label: it,
            key: it,
            children: it === '自定义' ? <CustomImg /> : <ImgList type={it} />,
          }))}
        />
      </Modal>
    </div>
  );
};
export default ChangeSkin;

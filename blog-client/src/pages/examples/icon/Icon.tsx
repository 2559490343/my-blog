import { getAllIcons } from '@/utils';
import { message } from 'antd';
import React from 'react';
import styles from './Icon.less';

const Icon = () => {
  const iconList = getAllIcons();
  // 复制对应名称的icon组件
  const copyIcon = (name: string) => {
    const componentName = `<${name} />`;
    navigator.clipboard.writeText(componentName).then(() => {
      message.success(`${componentName} copied!`);
    });
  };

  // 根据icon名称动态引入对应icon组件
  const renderIconComponent = (component: React.FC<any>) => {
    // const Icon = require(`~/Icon/icons/${name}`).default;
    const Icon = component;
    return <Icon />;
  };

  return (
    <div className={styles.root}>
      <ul className={styles.iconBox}>
        {iconList.map((icon) => (
          <li
            className={styles.iconItem}
            onClick={() => copyIcon(icon.name)}
            key={icon.name}
          >
            <div className={styles.iconInner}>
              {renderIconComponent(icon.component)}
            </div>
            <div className={styles.iconText}>{icon.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Icon;

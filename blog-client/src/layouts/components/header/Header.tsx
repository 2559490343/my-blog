import { NavLink } from 'umi';
import React, { useState, useEffect } from 'react';
import Login from '@/components/login';
import { Avatar, Menu, Dropdown, Modal, Tooltip } from 'antd';
import {
  UserOutlined,
  ExclamationCircleOutlined,
  SkinFilled,
} from '@ant-design/icons';
import { getStorage, setStorage, removeStorage } from '@/utils';
import styles from './Header.less';
import Logo from '@/components/Logo';
import ChangeSkin from '@/components/ChangeSkin';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navs = [
    {
      label: '学习博客',
      route: '/blog',
    },
    {
      label: '组件示例',
      route: '/examples',
    },
    {
      label: '最爱游戏',
      route: '/games',
    },
  ];
  const logout = () => {
    Modal.confirm({
      title: '警告',
      icon: <ExclamationCircleOutlined />,
      content: '确定要退出登录吗？',
      okText: '确认',
      // canceText: '取消',
      onOk: () => {
        removeStorage('isLogin');
        setIsLogin(false);
      },
    });
  };

  const handleLogin = () => {
    setIsLogin(true);
    setStorage('isLogin', true);
  };
  const menu = (
    <Menu>
      <Menu.Item danger key={1}>
        <span onClick={logout}>退出登录</span>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    if (getStorage('isLogin').value) {
      setIsLogin(true);
    }
  }, []);

  return (
    <header className={styles.header}>
      <Login
        showLogin={showLogin}
        handleLogin={handleLogin}
        hideLogin={() => setShowLogin(false)}
      />
      <div className={styles.headerInner}>
        <div className={styles.left}>
          <Logo />
          <div className={styles.nav}>
            <nav>
              {navs.map((nav) => (
                <NavLink
                  to={nav.route}
                  activeClassName={styles.active}
                  key={nav.route}
                >
                  {nav.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.toolBar}>
            <ChangeSkin />
          </div>
          <div
            className={styles.user}
            onClick={() => !isLogin && setShowLogin(!showLogin)}
          >
            {!isLogin ? (
              <Avatar size={30} icon={<UserOutlined />} />
            ) : (
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <Avatar size={30} src="https://joeschmoe.io/api/v1/random" />
              </Dropdown>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

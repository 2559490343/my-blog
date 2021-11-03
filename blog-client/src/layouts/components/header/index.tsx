import { NavLink } from 'umi';
import { useState } from 'react';
import Login from '@/components/login';
import { Avatar, Menu, Dropdown, Modal } from 'antd';
import { UserOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import './index.less';
export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const logout = () => {
    Modal.confirm({
      title: '警告',
      icon: <ExclamationCircleOutlined />,
      content: '确定要退出登录吗？',
      okText: '确认',
      canceText: '取消',
      onOk: () => setIsLogin(false),
    });
  };
  const menu = (
    <Menu>
      <Menu.Item danger key={1}>
        <span onClick={logout}>退出登录</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <header>
      <Login
        showLogin={showLogin}
        setIsLogin={setIsLogin}
        hideLogin={() => setShowLogin(false)}
      />
      <div className="logo">
        <span className="B">B</span>
        <span className="L">L</span>
        <span className="O">O</span>
        <span className="G">G</span>
      </div>
      <div className="right">
        <div className="nav">
          <nav>
            <NavLink to="/visualization" activeClassName="active">
              可视化
            </NavLink>
            <NavLink to="/stylesheet" activeClassName="active">
              CSS
            </NavLink>
            <NavLink to="/javascript" activeClassName="active">
              JavaScript
            </NavLink>
            <NavLink to="/webpack" activeClassName="active">
              Webpack
            </NavLink>
            <NavLink to="/vue" activeClassName="active">
              Vue
            </NavLink>
            <NavLink to="/react" activeClassName="active">
              React
            </NavLink>
            <NavLink to="/git" activeClassName="active">
              Git
            </NavLink>
            <NavLink to="/linux" activeClassName="active">
              Linux
            </NavLink>
            <NavLink to="/rep" activeClassName="active">
              知识库
            </NavLink>
          </nav>
        </div>
        <div className="user">
          {!isLogin ? (
            <Avatar
              size={30}
              icon={<UserOutlined />}
              onClick={() => setShowLogin(!showLogin)}
            />
          ) : (
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
              <Avatar size={30} src="https://joeschmoe.io/api/v1/random" />
            </Dropdown>
          )}
        </div>
      </div>
    </header>
  );
}

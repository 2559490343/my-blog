import React, { useState } from 'react';
import { Button, Form, Input, Checkbox } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './index.less';

export default function Login(props: {
  showLogin: boolean;
  hideLogin: () => void;
  setIsLogin: (flag: boolean) => void;
}) {
  const [loginForm] = Form.useForm();
  const [registerForm] = Form.useForm();
  const handleHideForm = () => {
    props.hideLogin();
    resetForms();
    setTimeout(() => {
      setShowRegister(false);
    }, 400);
  };
  const onLoginFinish = (values: any) => {
    console.log('loginvalues', values);
    props.setIsLogin(true);
    handleHideForm();
  };

  const onLoginFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onRegisterFinish = (values: any) => {
    console.log('registervalues', values);
  };

  const onRegisterFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const resetForms = () => {
    loginForm.resetFields();
    registerForm.resetFields();
  };
  const changeForm = (flag: boolean) => {
    setShowRegister(flag);
    resetForms();
  };
  const userNameValidator = async (rule: any, value: string) => {
    const len = value.length;
    if (len < 4) {
      throw new Error('用户名不能小于4位数!');
    } else if (len > 10) {
      throw new Error('用户名不能超过10位数!');
    }
  };

  const passwordValidator = async (rule: any, value: string) => {
    const len = value.length;
    if (len < 6) {
      throw new Error('密码不能小于6位数!');
    } else if (len > 16) {
      throw new Error('密码不能超过16位数!');
    }
  };

  const confirmValidator = async (rule: any, value: string | number) => {
    if (value != registerForm.getFieldValue('password')) {
      throw new Error('确认密码不一致!');
    }
  };

  const [showRegister, setShowRegister] = useState(false);
  const { showLogin } = props;
  return (
    <div className="login-page">
      <div className={`m-modal ${showLogin ? 'show' : ''}`}>
        <div className="login-header">
          <div className="title">欢迎使用个人微博</div>
          <div className="close-btn">
            <CloseOutlined onClick={handleHideForm} />
          </div>
        </div>

        <div
          className="login-form-area"
          style={{ display: showRegister ? 'none' : 'block' }}
        >
          <Form
            name="login"
            form={loginForm}
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            // initialValues={{}}
            onFinish={onLoginFinish}
            onFinishFailed={onLoginFinishFailed}
            autoComplete="off"
            validateTrigger="onBlur"
          >
            <Form.Item
              label=""
              name="username"
              validateFirst
              rules={[
                { required: true, message: '请输入用户名或邮箱!' },
                { validator: userNameValidator },
              ]}
            >
              <Input placeholder="用户名/邮箱" />
            </Form.Item>
            <Form.Item
              label=""
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
              style={{ marginBottom: '5px' }}
            >
              <Input.Password placeholder="输入密码" />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 0, span: 16 }}
              style={{ marginBottom: '10px' }}
            >
              <Checkbox>记住我</Checkbox>
            </Form.Item>
            <Form.Item
              wrapperCol={{ offset: 0, span: 24 }}
              style={{ marginBottom: '0px' }}
            >
              <Button
                type="primary"
                className="form-btn"
                htmlType="submit"
                // onClick={handleLogin}
              >
                登录
              </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
              <span className="form-tips" onClick={() => changeForm(true)}>
                没有账号？去注册
              </span>
            </Form.Item>
          </Form>
        </div>
        <div
          className="register-form-area"
          style={{ display: showRegister ? 'block' : 'none' }}
        >
          <Form
            name="register"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            // initialValues={{}}
            form={registerForm}
            onFinish={onRegisterFinish}
            onFinishFailed={onRegisterFinishFailed}
            autoComplete="off"
            validateTrigger="onBlur"
          >
            <Form.Item
              label=""
              name="username"
              validateTrigger="onBlur"
              rules={[
                {
                  required: true,
                  message: '请输入用户名或邮箱!',
                },
              ]}
            >
              <Input placeholder="用户名/邮箱" />
            </Form.Item>
            <Form.Item
              label=""
              name="password"
              validateFirst
              rules={[
                { required: true, message: '请输入密码!' },
                { validator: passwordValidator },
              ]}
            >
              <Input.Password placeholder="密码" />
            </Form.Item>
            <Form.Item
              name="confirm"
              validateFirst
              rules={[
                { required: true, message: '请确认密码!' },
                { validator: confirmValidator },
              ]}
            >
              <Input.Password placeholder="确认密码" />
            </Form.Item>
            <Form.Item
              wrapperCol={{ offset: 0, span: 24 }}
              style={{ marginBottom: '5px' }}
            >
              <Button type="primary" htmlType="submit" className="form-btn">
                注册
              </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
              <span className="form-tips" onClick={() => changeForm(false)}>
                已有账号？去登录
              </span>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className={`m-modal-mark ${showLogin ? 'show' : ''}`}></div>
    </div>
  );
}

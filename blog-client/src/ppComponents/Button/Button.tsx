import React, { HTMLAttributes, ReactNode, useMemo } from 'react';
import './Button.less';
import cn from 'classnames';
import { LoadingOutlined } from '@ant-design/icons';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'default' | 'primary' | 'dashed' | 'link';
  shape?: 'default' | 'round';
  size?: 'large' | 'default' | 'small';
  htmlType?: 'submit' | 'reset' | 'button';
  icon?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type,
    shape,
    icon,
    size,
    disabled,
    loading,
    htmlType,
    className,
    children,
    ...restProps
  } = props;

  const btnDisabled = useMemo(() => disabled || loading, [disabled, loading]);

  return (
    <button
      {...restProps}
      disabled={btnDisabled}
      type={htmlType}
      className={cn(
        'pp-btn',
        `pp-btn-type-${type}`,
        `pp-btn-size-${size}`,
        `pp-btn-shape-${shape}`,
        {
          'pp-btn-disabled': disabled,
        },
        {
          'pp-btn-loading': loading,
        },
        className,
      )}
    >
      {loading ? (
        <span className="pp-btn-icon">
          <LoadingOutlined />
        </span>
      ) : (
        icon && <span className="pp-btn-icon">{icon}</span>
      )}
      {children && <span className="pp-btn-children">{children}</span>}
    </button>
  );
};
Button.defaultProps = {
  type: 'default',
  size: 'default',
  shape: 'default',
  htmlType: 'button',
};

export default Button;

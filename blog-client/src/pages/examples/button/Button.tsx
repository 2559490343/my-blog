import React, { useState } from 'react';
import styles from './Button.less';
import Button from '~/Button';

const ButtonPage = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    console.log('click---');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={styles.root}>
      <Button>default</Button>
      <Button
        type="primary"
        size="large"
        loading={loading}
        icon={<span>+</span>}
        onClick={handleClick}
      >
        primary
      </Button>
      <Button type="dashed" size="small">
        dashed
      </Button>
      <Button type="link">link</Button>
      <Button shape="round" size="small">
        round
      </Button>
      <Button loading>loading</Button>
    </div>
  );
};
export default ButtonPage;

import React from 'react';
import { Button } from 'antd';

export default function EditorFooter(props: {
  handleCancel: any;
  handleSubmit: any;
}) {
  const { handleCancel, handleSubmit } = props;
  return (
    <footer>
      <Button onClick={handleCancel} danger type="primary">
        取消
      </Button>
      <Button onClick={handleSubmit} type="primary">
        提交
      </Button>
    </footer>
  );
}

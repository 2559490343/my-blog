import React from 'react';
import { Button } from 'antd';

export default function EditorFooter(props: {
  handleCancel: any;
  handleSave: any;
  handleSubmit: any;
}) {
  const { handleCancel, handleSave, handleSubmit } = props;
  return (
    <footer>
      <Button onClick={handleCancel} danger type='primary'>取消</Button>
      <Button onClick={handleSave} type='dashed'>保存</Button>
      <Button onClick={handleSubmit} type="primary">
        提交
      </Button>
    </footer>
  );
}

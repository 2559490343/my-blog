import { useState } from 'react';
import { EditFilled } from '@ant-design/icons';
import EditorModal from './components/editorModal';
import { Tooltip } from 'antd';
import './index.less';

export default function Write() {
  // 编辑文章弹窗的visible
  const [visible, setVisible] = useState(false);
  // 显示弹窗
  const handleShowEditor = () => {
    setVisible(true);
  };

  return (
    <div className="write-component" id="write-component">
      <Tooltip placement="top" title="写文章">
        <EditFilled className="write-icon" onClick={handleShowEditor} />
      </Tooltip>
      <div id="editor-container" />
      {/* 写文章弹窗 */}
      <EditorModal visible={visible} setVisible={setVisible} />
    </div>
  );
}

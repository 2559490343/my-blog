import { useState } from 'react';
import { Modal, Form } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import EditorFooter from '../editorFooter';
import { Editor } from '@/components/bytemd';
import EditorForm from '../editorForm';

export default function EditorModal(props: {
  visible: boolean;
  setVisible: (val: boolean) => void;
}) {
  const { visible, setVisible } = props;
  // 编辑文章弹窗的visible
  // editor绑定的value值
  const [editorValue, setEditorValue] = useState('');
  // form表单实例
  const [editorForm] = Form.useForm();
  // 保存钩子
  const handleSave = () => {};
  // 取消钩子
  const handleCancel = () => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: '关闭弹窗后将您写的内容将不会被保存，您确定要关闭吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: handleCloseEditor,
    });
  };
  // 关闭弹窗回调
  const handleCloseEditor = () => {
    initData();
    setVisible(false);
  };
  // 初始化数据所有数据
  const initData = () => {
    editorForm.resetFields();
    setEditorValue('');
  };
  return (
    <Modal
      visible={visible}
      className="write-editor"
      maskClosable={false}
      closable={false}
      style={{ height: '95%' }}
      getContainer={'#editor-container'}
      width="80%"
      footer={
        <EditorFooter
          handleCancel={handleCancel}
          handleSave={handleSave}
          handleSubmit={editorForm.submit}
        />
      }
    >
      <div className="editor-header">
        <EditorForm editorForm={editorForm} />
      </div>
      <div className="editor-box">
        <Editor value={editorValue} setValue={setEditorValue} />
      </div>
    </Modal>
  );
}

import { useState } from 'react';
import { Modal, Form, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import EditorFooter from '../editorFooter';
import EditorForm from '../editorForm';
import styles from './index.less';
import Editor from '../Editor';
import BraftEditor from 'braft-editor';
import { addApi } from '@/pages/blog/services';

export default function EditorModal(props: {
  visible: boolean;
  setVisible: (val: boolean) => void;
  freshList: () => void;
}) {
  // 编辑文章弹窗的visible
  const { visible, setVisible, freshList } = props;
  // editor绑定的value值
  const [editorValue, setEditorValue] = useState(
    BraftEditor.createEditorState(''),
  );
  // form表单实例
  const [editorForm] = Form.useForm();
  // 取消钩子
  const handleCancel = () => {
    Modal.confirm({
      title: '提示',
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
    setEditorValue(BraftEditor.createEditorState(''));
  };

  const handleSubmit = () => {
    editorForm.validateFields().then(async (values) => {
      const params = {
        ...values,
        tags: values.tags?.join(',') ?? '',
        content: editorValue.toHTML(),
      };
      const res = await addApi(params);
      if (res.success) {
        message.success('发布成功!');
        setVisible(false);
        freshList();
      } else {
        message.error(res.message);
      }
    });
  };

  return (
    <Modal
      open={visible}
      className={styles.writeEditor}
      maskClosable={false}
      closable={false}
      width="70%"
      footer={
        <EditorFooter handleCancel={handleCancel} handleSubmit={handleSubmit} />
      }
    >
      <div className={styles.editorHeader}>
        <EditorForm editorForm={editorForm} />
      </div>
      <div className={styles.editorBox}>
        <Editor editorValue={editorValue} setEditorValue={setEditorValue} />
      </div>
    </Modal>
  );
}

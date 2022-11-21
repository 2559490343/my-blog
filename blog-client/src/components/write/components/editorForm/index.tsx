import AutoSelect from '@/components/AutoSelect';
import { tagTypes } from '@/pages/blog/constant';
import { Form, FormInstance, Input, message } from 'antd';

interface EditorFormProps {
  editorForm: FormInstance;
}
const EditorForm = (props: EditorFormProps) => {
  const { editorForm } = props;

  return (
    <Form
      name="basic"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 22 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      form={editorForm}
    >
      <Form.Item
        label="文章标题"
        name="title"
        rules={[
          {
            required: true,
            message: '请输入文章标题!',
          },
        ]}
      >
        <Input maxLength={30} placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="文章摘要"
        name="abstract"
        rules={[
          {
            required: true,
            message: '请输入文章摘要!',
          },
        ]}
      >
        <Input.TextArea maxLength={200} placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="标签"
        name="tags"
        rules={[
          {
            required: true,
            message: '请选择标签!',
          },
        ]}
      >
        <AutoSelect options={tagTypes} mode="multiple" />
      </Form.Item>
    </Form>
  );
};

export default EditorForm;

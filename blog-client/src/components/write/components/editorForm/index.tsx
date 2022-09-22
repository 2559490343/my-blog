import { Form, Input, Cascader } from 'antd';

export default function EditorForm(props: any) {
  const { editorForm } = props;
  // 提交钩子
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 22 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      form={editorForm}
      onFinish={handleSubmit}
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
    </Form>
  );
}

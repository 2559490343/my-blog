import AutoSelect from '@/components/AutoSelect';
import { Form, Input, Cascader } from 'antd';

export default function EditorForm(props: any) {
  const { editorForm } = props;
  const tags = [
    {
      label: '前端',
      value: '前端',
    },
    {
      label: 'React',
      value: 'React',
    },
    {
      label: '后端',
      value: '后端',
    },
    {
      label: 'Java',
      value: 'Java',
    },
    {
      label: 'Vue',
      value: 'Vue',
    },
  ];
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
        <AutoSelect options={tags} mode='multiple' />
      </Form.Item>
    </Form>
  );
}

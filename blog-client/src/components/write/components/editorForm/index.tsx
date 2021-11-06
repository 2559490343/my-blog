import { Form, Input, Cascader } from 'antd';

export default function EditorForm(props: any) {
  const { editorForm } = props;
  // 提交钩子
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  // 目录选择联机选择器的数据
  const options = [
    {
      label: '可视化',
      value: 1,
      children: [
        {
          label: 'echarts',
          value: 2,
        },
        {
          label: 'AntV/L7',
          value: 3,
        },
        {
          label: 'threejs',
          value: 4,
        },
      ],
    },
    {
      label: 'CSS',
      value: 5,
      children: [
        {
          label: 'css的精彩世界',
          value: 6,
        },
      ],
    },
    {
      label: 'JavaScript',
      value: 7,
      children: [
        {
          label: '数据类型',
          value: 8,
        },
        {
          label: '作用域以及闭包机制',
          value: 9,
        },
        {
          label: '算法',
          value: 10,
        },
        {
          label: '高阶编程',
          value: 11,
        },
        {
          label: '封装工具包',
          value: 12,
        },
        {
          label: '面向对象',
          value: 13,
        },
        {
          label: 'Promise',
          value: 14,
        },
        {
          label: 'HTTP网络层',
          value: 15,
        },
      ],
    },
  ];

  return (
    <Form
      name="basic"
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 21 }}
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
        <Input maxLength={30} />
      </Form.Item>

      <Form.Item
        label="文章所属目录"
        name="directory"
        initialValue={[1, 2]}
        rules={[
          {
            required: true,
            message: '请选择文章所属目录!',
          },
        ]}
      >
        <Cascader options={options} />
      </Form.Item>
    </Form>
  );
}

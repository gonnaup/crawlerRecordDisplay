import { Affix, Button, Card, Form, Input, Select } from 'antd';
import { QueryFormItemProps, QueryHeaderProps } from '../interfaces/props';

const QueryHeader = (props: QueryHeaderProps) => {
  const [form] = Form.useForm();
  return (
    <Affix>
      <Card style={{ marginBottom: 16 }}>
        <Form
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
          layout="inline"
          {...props.form}
        >
          {props.formItems.map((item: QueryFormItemProps) => {
            const { type, ...props_ } = item;
            //输入框
            if ('input' === type) {
              console.log(props_);
              return (
                <Form.Item key={props_.name} {...props_} style={{ width: 200 }}>
                  <Input />
                </Form.Item>
              );
            } else {
              //下拉框
              const { selectConfig, ...formItems } = props_;
              return (
                <Form.Item
                  key={props_.name}
                  {...formItems}
                  style={{ width: 200 }}
                >
                  <Select {...selectConfig} />
                </Form.Item>
              );
            }
          })}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Affix>
  );
};

export default QueryHeader;

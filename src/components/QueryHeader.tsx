import {
  Button,
  Form,
  FormItemProps,
  FormProps,
  Input,
  Select,
  SelectProps
} from 'antd'
import React from 'react'

interface QueryFormProps extends FormProps {
  name: string
  onFinish: (values: any) => any
}

interface QuerySelectProps extends SelectProps {
  options: { label: string; value: string }[]
  onSelect: (value: string, option?: any) => any
}

export interface QueryFormItemProps extends FormItemProps {
  lable: string
  name: string
  type: 'input' | 'select'
  selectConfig?: QuerySelectProps
}

interface QueryHeaderProps {
  form: QueryFormProps
  formItems: QueryFormItemProps[]
}

const QueryHeader = (props: QueryHeaderProps) => {
  const [form] = Form.useForm()
  return (
    <Form
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
      layout="inline"
      {...props.form}
    >
      {props.formItems.map((item: QueryFormItemProps) => {
        //输入框
        if ('input' === item.type) {
          return (
            <Form.Item {...item}>
              <Input />
            </Form.Item>
          )
        } else {
          //下拉框
          const { selectConfig, ...formItems } = item
          return (
            <Form.Item {...formItems}>
              <Select {...selectConfig} />
            </Form.Item>
          )
        }
      })}
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          查询
        </Button>
      </Form.Item>
    </Form>
  )
}

export default QueryHeader

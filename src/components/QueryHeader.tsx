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

interface QueryFormItemProps extends FormItemProps {
  label: string
  name: string
  type: 'input' | 'select'
  selectConfig?: QuerySelectProps
}

export interface QueryHeaderProps {
  /**
   * 表单props
   */
  form: QueryFormProps
  /**
   * 查询框props
   */
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
        const {type, ...props_} = item
        //输入框
        if ('input' === type) {
          console.log(props_)
          return (
            <Form.Item key={props_.name} {...props_}  style={{width: 200}}>
              <Input />
            </Form.Item>
          )
        } else {
          //下拉框
          const { selectConfig, ...formItems } = props_
          return (
            <Form.Item key={props_.name} {...formItems}  style={{width: 200}}>
              <Select {...selectConfig}/>
            </Form.Item>
          )
        }
      })}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          查询
        </Button>
      </Form.Item>
    </Form>
  )
}

export default QueryHeader

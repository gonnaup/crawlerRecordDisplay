import { FormProps, SelectProps, FormItemProps } from 'antd';

interface QueryFormProps extends FormProps {
    name: string;
    onFinish: (values: any) => any;
}

interface QuerySelectProps extends SelectProps {
    options: { label: string; value: string }[];
    onSelect: (value: string, option?: any) => any;
}

export interface QueryFormItemProps extends FormItemProps {
  label: string;
  name: string;
  type: 'input' | 'select';
  selectConfig?: QuerySelectProps;
}

export interface QueryHeaderProps {
  /**
   * 表单props
   */
  form: QueryFormProps;
  /**
   * 查询框props
   */
  formItems: QueryFormItemProps[];
}

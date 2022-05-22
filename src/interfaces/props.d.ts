export interface QueryHeaderProps {
  /**
   * 表单名称
   */
  name: string;

  /**
   * 查询按钮事件
   */
  onFinish: (values: any) => any;
}

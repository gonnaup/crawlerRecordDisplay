export interface Page {
  total: number;
}

export interface PageParam {
  page: number;
  pageSize: number;
}

export interface IPaginationConfig {
  /**
   * 每页条数
   */
  pageSize?: number;
  /**
   * 总条数
   */
  total?: number;
  /**
   * 页码或pageSize改变的回调
   * @param page 改变后的页码
   * @param pageSize 改变后的pageSize
   */
  onChange?: (page: number, pageSize: number) => void;
  /**
   * pageSize变化后的回调
   */
  onShowSizeChange?: (current: number, size: number) => void;
}

import { PageParam } from "./pagination";
import {WithKey} from './util'

/**
 * 豆瓣小说后台数据
 */
export interface DoubanNovelData {
    id: number;
    title: string;
    author: string;
    authorUrl: string;
    kind: string;
    words: string;
    status: string;
    tag: string;
    introduce: string;
    novelUrl: string;
    coverUrl: string;
  }

  /**
   * 豆瓣小说表格数据
   */
  export type DoubanNovelTableRowData = WithKey<DoubanNovelData>;

  /**
   * 豆瓣小说分页查询参数
   */
  export type DoubanNovelPagedParam = Partial<DoubanNovelData> & PageParam;
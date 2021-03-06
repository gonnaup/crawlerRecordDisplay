import { Button, Table } from 'antd';
import { ReactNode } from 'react';
import { DoubanNovelTableRowData } from '../interfaces/data';
import { IPaginationConfig } from '../interfaces/pagination';

type Props = {
  datasource: DoubanNovelTableRowData[];
  pagination?: IPaginationConfig;
};

type Colums = {
  title: string;
  key: string;
  dataIndex: string;
  render?: (value: any, record: any, index: number) => ReactNode;
  ellipsis?: boolean;
  width?: string | number;
}[];

const colums: Colums = [
  {
    title: 'ID',
    key: 'id',
    dataIndex: 'id',
    width: '7%'
  },
  {
    title: '书名',
    key: 'title',
    dataIndex: 'title',
    ellipsis: true,
    render: (value, record) => {
      const { novelUrl } = record;
      return (
        <div style={{ display: 'inline' }}>
          <Button type="link" target={'_blank'} href={novelUrl}>
            {value}
          </Button>
        </div>
      );
    }
  },
  {
    title: '作者',
    key: 'author',
    dataIndex: 'author',
    render: (value, record) => {
      const { authorUrl } = record;
      return (
        <>
          <Button type="link" target={'_blank'} href={authorUrl}>
            {value}
          </Button>
        </>
      );
    }
  },
  {
    title: '类型',
    key: 'kind',
    dataIndex: 'kind',
    width: '6%'
  },
  {
    title: '字数',
    key: 'words',
    dataIndex: 'words',
    width: '6%'
  },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'status',
    width: '6%'
  },
  {
    title: '标签',
    key: 'tag',
    dataIndex: 'tag',
    width: '6%'
  },
  {
    title: '简介',
    key: 'introduce',
    dataIndex: 'introduce',
    ellipsis: true,
    width: '40%'
  }
];

const DoubanNovelTable = (props: Props) => {
  return (
    <Table
      columns={colums}
      dataSource={props.datasource}
      size="small"
      bordered
      pagination={{
        position: ['bottomCenter'],
        size: 'default',
        showQuickJumper: true,
        showTotal: (total) => `总共 [${total}] 条`,
        ...props.pagination
      }}
    />
  );
};

export default DoubanNovelTable;

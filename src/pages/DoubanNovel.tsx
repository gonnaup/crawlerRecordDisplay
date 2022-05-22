import { useEffect, useState } from 'react';
import { fetchDoubanNovelPaged } from '../apis/axiosUtil';
import DoubanNovelTable from '../components/DoubanNovelTable';
import QueryHeader from '../components/QueryHeader';
import { DoubanNovelData, DoubanNovelTableRowData } from '../interfaces/data';
import { QueryHeaderProps } from '../interfaces/props';

type NovelList = DoubanNovelData[];

const queryNovel = (values: any) => {
  console.log(values);
};

const headerProps: QueryHeaderProps = {
  form: {
    name: 'doubanNovelQueryForm',
    labelCol: { span: 8 },
    wrapperCol: { span: 18 },
    onFinish: queryNovel
  },
  formItems: [
    {
      type: 'input',
      label: '书名',
      name: 'name'
    },
    {
      type: 'input',
      label: '作者',
      name: 'author'
    },
    {
      type: 'select',
      label: '类型',
      name: 'kind',
      selectConfig: {
        options: [
          {
            label: '全部',
            value: ''
          },
          {
            label: '幻想',
            value: '幻想'
          }
        ],
        onSelect(value, option?) {},
        placeholder: '小说类型'
      }
    }
  ]
};

const DoubanNovel = function () {
  const [novelList, setNovelList] = useState<NovelList>([]);

  useEffect(() => {
    fetchDoubanNovelPaged({ page: 1, pageSize: 10 }).then((response) => {
      let list: NovelList = response.data.data.content;
      setNovelList(list);
    });
  }, []);

  return (
    <div style={{ paddingTop: 16 }}>
      <QueryHeader {...headerProps} />
      <DoubanNovelTable
        datasource={novelList.map((novel) => {
          let rowData = novel as DoubanNovelTableRowData;
          rowData.key = novel.id.toString();
          return rowData;
        })}
      />
    </div>
  );
};

export default DoubanNovel;

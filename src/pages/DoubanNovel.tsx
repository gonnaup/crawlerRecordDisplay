import { useEffect, useState } from 'react';
import { fetchDoubanNovelPaged } from '../apis/doubanNovelApi';
import DoubanNovelTable from '../components/DoubanNovelTable';
import DoubanNovelQueryHeader from '../components/DoubanNovelQueryHeader';
import { DoubanNovelData, DoubanNovelTableRowData } from '../interfaces/data';
import { QueryHeaderProps } from '../interfaces/props';

type NovelList = DoubanNovelData[];

const queryNovel = (values: any) => {
  console.log(values);
};

const headerProps: QueryHeaderProps = {
  name: 'doubanNovelQueryForm',
  onFinish: queryNovel
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
      <DoubanNovelQueryHeader {...headerProps} />
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

import { useEffect, useState } from 'react';
import { fetchDoubanNovelPaged } from '../apis/doubanNovelApi';
import DoubanNovelTable from '../components/DoubanNovelTable';
import DoubanNovelQueryHeader from '../components/DoubanNovelQueryHeader';
import { DoubanNovelData, DoubanNovelTableRowData } from '../interfaces/data';
import { QueryHeaderProps } from '../interfaces/props';
import { PageParam } from '../interfaces/pagination';

type NovelList = DoubanNovelData[];



const DoubanNovel = function () {
  const [novelList, setNovelList] = useState<NovelList>([]);
  const [pageParam, setPageParam] = useState<PageParam>({page: 1, pageSize: 10});
  const [queryParam, setQueryParam] = useState<Partial<DoubanNovelData>>({});


  const queryNovel = (values: any) => {
    for (let k in values) {
      if (values[k] && values[k].trim()) {
        
      } else {
        delete values[k]
      }
    }
    console.log(values);
    setQueryParam(values)
  };

  useEffect(() => {
    
    fetchDoubanNovelPaged(Object.assign({}, pageParam, queryParam)).then((response) => {
      let list: NovelList = response.data.data.content;
      setNovelList(list);
    });
  }, [pageParam, queryParam]);

  const headerProps: QueryHeaderProps = {
    name: 'doubanNovelQueryForm',
    onFinish: queryNovel
  };
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

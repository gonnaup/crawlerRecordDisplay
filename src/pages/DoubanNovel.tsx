import { useEffect, useState } from 'react';
import { fetchDoubanNovelPaged } from '../apis/doubanNovelApi';
import DoubanNovelTable from '../components/DoubanNovelTable';
import DoubanNovelQueryHeader from '../components/DoubanNovelQueryHeader';
import { DoubanNovelData, DoubanNovelTableRowData } from '../interfaces/data';
import { QueryHeaderProps } from '../interfaces/props';
import { PageParam, IPaginationConfig } from '../interfaces/pagination';
import { removeEmptyUndefined } from '../utils/objectUtil';

type NovelList = DoubanNovelData[];

const DoubanNovel = function () {
  const [novelList, setNovelList] = useState<NovelList>([]);
  const [pageParam, setPageParam] = useState<PageParam>({
    page: 1,
    pageSize: 10
  });
  const [queryParam, setQueryParam] = useState<Partial<DoubanNovelData>>({});
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    fetchDoubanNovelPaged(Object.assign({}, pageParam, queryParam)).then(
      (response) => {
        let list: NovelList = response.data.data.content;
        setNovelList(list);
        setTotal(response.data.data.totalElements);
      }
    );
  }, [pageParam, queryParam]);

  const headerProps: QueryHeaderProps = {
    name: 'doubanNovelQueryForm',
    onFinish(values) {
      removeEmptyUndefined(values);
      setQueryParam(values);
    }
  };

  const paginationProps: IPaginationConfig = {
    current: pageParam.page,
    pageSize: pageParam.pageSize,
    total: total,
    onChange(page, pageSize) {
      setPageParam({ page: page, pageSize: pageSize });
    }
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
        pagination={paginationProps}
      />
    </div>
  );
};

export default DoubanNovel;

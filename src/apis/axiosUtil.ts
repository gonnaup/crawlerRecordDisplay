import AXIOS from 'axios';
import { DoubanNovelData } from '../pages/DoubanNovel';
import { PageParam } from '../interfaces/page';

const axios = AXIOS.create();

export type DoubanNovelPagedParam = Partial<DoubanNovelData> & PageParam;

export async function fetchDoubanNovelPaged(params: DoubanNovelPagedParam) {
  const result = await axios.get('http://localhost:80/novel/list/', {
    params: params
  });
  return result;
}

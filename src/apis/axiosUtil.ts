import AXIOS from 'axios';
import { DoubanNovelPagedParam } from '../interfaces/data';

const axios = AXIOS.create();


export async function fetchDoubanNovelPaged(params: DoubanNovelPagedParam) {
  const result = await axios.get('http://localhost:80/novel/list/', {
    params: params
  });
  return result;
}

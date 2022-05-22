import { DoubanNovelPagedParam } from '../interfaces/data';
import { _axios } from './axiosCreator';

export function fetchDoubanNovelPaged(params: DoubanNovelPagedParam) {
  return _axios.get('/novel/list', {
    params: params
  });
}

export function fetchDoubanNovelKinds() {
  return _axios.get('/novel/category/kinds');
}

export function fetchDoubanNovelTags() {
  return _axios.get('/novel/category/tags');
}

export function fetchDoubanNovelStatus() {
  return _axios.get('/novel/category/status');
}

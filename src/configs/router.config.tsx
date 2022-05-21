import { Skeleton } from 'antd';
import { lazy, ReactNode, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import Introduction from '../pages/Introduction';
import Main from '../pages/Main';

/**
 * 懒加载
 */
const AdminSubject = lazy(() => import('../pages/AdminSubject'));
const CommonSubject = lazy(() => import('../pages/CommonSubject'));
const DoubanNovel = lazy(() => import('../pages/DoubanNovel'));

/**
 * 懒加载用Suspense包裹
 */
const lazyLoad = (element: ReactNode): ReactNode => (
  <Suspense fallback={<Skeleton active />}>{element}</Suspense>
);

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Introduction />
      },
      {
        path: 'subject/admin',
        element: lazyLoad(<AdminSubject />)
      },
      {
        path: 'subject/common',
        element: lazyLoad(<CommonSubject />)
      },
      {
        path: 'crawlerdata/doubanNovel',
        element: lazyLoad(<DoubanNovel />)
      }
    ]
  }
];

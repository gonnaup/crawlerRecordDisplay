import { MenuProps } from 'antd';
import { UserOutlined, BookOutlined } from '@ant-design/icons';

type MenuItems = Required<MenuProps>['items'];
export const menuItems: MenuItems = [
  {
    label: '用户管理',
    key: 'subject',
    icon: <UserOutlined />,
    children: [
      {
        label: '管理员用户',
        key: '/subject/admin'
      },
      {
        label: '普通用户',
        key: '/subject/common'
      }
    ]
  },
  {
    label: '爬虫数据',
    key: 'crawlerdata',
    type: 'group',
    children: [
      {
        label: '豆瓣小说数据',
        key: '/crawlerdata/doubanNovel',
        icon: <BookOutlined />
      }
    ]
  }
];

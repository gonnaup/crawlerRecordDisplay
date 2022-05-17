import { MenuProps } from "antd";
import { UserOutlined, BookOutlined } from "@ant-design/icons";

type MenuItems = Required<MenuProps>["items"];
export const menuItems: MenuItems = [
  {
    label: "用户管理",
    key: "subject-management",
    icon: <UserOutlined />,
    children: [
      {
        label: "管理员用户",
        key: "admin-subject",
      },
      {
        label: "普通用户",
        key: "common-subject",
      },
    ],
  },
  {
    label: "爬虫数据",
    key: "crawler-data",
    type: "group",
    children: [
      {
        label: "豆瓣小说数据",
        key: "douban-novel",
        icon: <BookOutlined />,
      },
    ],
  },
];

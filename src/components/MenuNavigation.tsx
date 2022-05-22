import { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { menuItems } from '../configs/menu.config';

type ClickHandler = MenuProps['onClick'];

const items = menuItems;

const MenuNavigation = () => {
  const navigate = useNavigate();
  const onClick: ClickHandler = (e) => {
    navigate(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      theme="light"
      defaultSelectedKeys={['data/doubanNovel']}
      defaultOpenKeys={['subjectManagement']}
      mode="inline"
      items={items}
    />
  );
};

export default MenuNavigation;

import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { menuItems } from '../configs/menu.config'

type ClickHandler = MenuProps['onClick']

const items = menuItems

const onClick: ClickHandler = (e) => {
  console.log('click ', e)
}

const MenuNavigation = () => {
  return (
    <Menu
      onClick={onClick}
      theme="light"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  )
}

export default MenuNavigation

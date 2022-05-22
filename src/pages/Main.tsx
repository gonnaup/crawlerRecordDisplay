import { Layout } from 'antd';
import MenuNavigation from '../components/MenuNavigation';
import { Outlet } from 'react-router-dom';
import ContentHeader from '../components/ContentHeader';

const { Sider, Content, Footer } = Layout;

const Main = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light" collapsible>
        <div className="logo" />
        <MenuNavigation />
      </Sider>
      <Layout>
        <ContentHeader />
        <Content style={{ margin: '0 16px' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ts-react-antd ©2022 Created by gonnaup
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;

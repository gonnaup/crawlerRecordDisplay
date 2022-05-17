import { Breadcrumb, Layout } from 'antd'
import MenuNavigation from './components/MenuNavigation'

function App() {
  const { Header, Content, Footer, Sider } = Layout
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light" collapsible>
        <div className="logo" />
        <MenuNavigation />
      </Sider>
      <Layout>
        <Header style={{backgroundColor: '#00a650'}}/>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360 }}>Bill is a cat.</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ts-react-antd ©2018 Created by gonnaup
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App

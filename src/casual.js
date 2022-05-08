import { Layout, Menu, Breadcrumb } from 'antd';
import Logo from './image/one.png';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { Card, Col, Row } from 'antd';

const { Meta } = Card;
const { Header, Content, Footer } = Layout;
export default () => (
  <Layout>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
      }}
    >
      {/* <div className="logo" /> */}
      {/* <Avatar size={64} icon={Logo} /> */}
      {/* <img src={Logo} alt="logo" style={{ width: '50px' }} /> */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={[
          // { key: '10', label: 'priceing', icon: <Logo /> },
          {
            key: '1',
            label: 'priceing',
          },
          {
            key: '2',
            label: 'Booking',
          },
          {
            key: '3',
            label: 'FAQ',
          },
          {
            key: '4',
            label: 'contack US',
          },
          {
            key: '',
            label: '',
          },
          {
            key: '',
            label: '',
          },
          {
            key: '',
            label: '',
          },
          {
            key: '',
            label: '',
          },
          {
            key: '11',
            label: 'logput',
          },
        ]}
      />
    </Header>
    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
          display: 'flex',
          justifyItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      ></div>
    </Content>
    {/* <Footer
        style={{
          textAlign: 'center',
        }}
      >
        
      </Footer> */}
  </Layout>
);

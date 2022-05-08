import { Layout, Menu, Breadcrumb } from 'antd';
import Logo from './image/one.png';
import Side from './image/side.jpg';
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
            label: 'looput',
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
      >
        <img src={Side} alt="logo" style={{ width: '500px' }} />
        <div style={{ width: '500px' }}>
          <h3>Casual</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </Content>
    {/* <Footer
        style={{
          textAlign: 'center',
        }}
      >
        
      </Footer> */}
  </Layout>
);
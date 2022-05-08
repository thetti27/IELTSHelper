import { Button, Layout, Menu, Input, Select, Upload } from 'antd';

import React, { useEffect, useState } from 'react';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Table, Modal } from 'antd';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import {
  DeleteOutlined,
  EditOutlined,
  FilePdfOutlined,
} from '@ant-design/icons';
import { Form } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const { Search } = Input;
const { Header, Sider, Content, Footer } = Layout;
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const Users = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggle, settoggle] = useState(false);
  const [Data, setData] = useState(false);
  let history = useHistory();

  useEffect(() => {
    // let payLoad
    console.log('lo');
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/api/viewPlans',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        setData(response.data);
        console.log('ol', response.data);
      })
      .catch((response) => {
        //handle error
        console.log(response);
      });
  }, []);
  const handleDelete = (e, record) => {
    // this.setState({ deleteDoctorId: record.id, deleteDoctorModal: true });
  };

  const handleUpdate = (e, item) => {
    console.log(e.id);
    history.push(`/editplan/${e.id}`);
    window.location.href = `/editplan/${e.id}`;
    // window.location.href('/');
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      responsive: ['md'],
      render: (text, record) => (
        <img src={record.image} style={{ width: '100px', width: '100px' }} />
      ),
    },
    {
      title: 'Type',
      dataIndex: 'Type',
      key: 'Type',
      responsive: ['lg'],
    },
    {
      title: 'Actions',
      render: (text, record) => (
        <>
          <Button onClick={(e) => handleUpdate(e, record)}>
            <EditOutlined /> {'Update'}
          </Button>{' '}
          &ensp;
          <Button onClick={(e) => handleDelete(e, record)}>
            <DeleteOutlined /> {'Delete'}
          </Button>
        </>
      ),
    },
  ];
  const [form] = Form.useForm();

  const fileList = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ];
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <div className="logo" />
        <div style={{ color: '#ffffff', textAlign: 'center' }}>
          {' '}
          Admin Panel
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Overview',
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'User',
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: 'Teacher',
            },
            {
              key: '4',
              icon: <UserOutlined />,
              label: 'Plans',
            },
            {
              key: '5',
              icon: <UserOutlined />,
              label: 'Booking',
            },
            {
              key: '4',
              icon: <UserOutlined />,
              label: 'Info Center',
            },
            {
              key: '5',
              icon: '',
              label: '',
            },
            {
              key: '5',
              icon: '',
              label: '',
            },
            {
              key: '5',
              icon: <UserOutlined />,
              label: 'setting',
            },
            {
              key: '5',
              icon: <UserOutlined />,
              label: 'Subscription',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              style={{
                background: '#001529',
                borderColor: '#001529',
                color: '#ffffff',
              }}
              onClick={() => (window.location.href = `/addplan`)}
            >
              <Link to="/addplan">Add Plan</Link>
            </Button>
          </div>

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
            {Data &&
              Data.length > 0 &&
              Data.map((item) => (
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta title={item.planType} description={item.description} />
                  <Button
                    onClick={() => handleUpdate(item)}
                    style={{
                      background: 'green',
                      borderColor: '#001529',
                      color: '#ffffff',
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    style={{
                      background: 'red',
                      borderColor: '#001529',
                      color: '#ffffff',
                      marginLeft: '20px',
                    }}
                  >
                    {' '}
                    Delete
                  </Button>
                </Card>
              ))}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Users;

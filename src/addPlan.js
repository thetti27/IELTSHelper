import { Button, Layout, Menu, Input, Select, Upload } from 'antd';

import React, { useState } from 'react';
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

const { Search } = Input;
const { Header, Sider, Content } = Layout;
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

  const handleDelete = (e, record) => {
    // this.setState({ deleteDoctorId: record.id, deleteDoctorModal: true });
  };

  const handleUpdate = (e, record) => {};
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
  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
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
          <div
            style={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
            }}
          >
            <Form
              {...layout}
              form={form}
              name="control-hooks"
              onFinish={onFinish}
            >
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
              <Form.Item
                name="PLAN"
                label="PLAN"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="DESCRIPTION"
                label="DESCRIPTION"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="AMOUNT"
                label="AMOUNT"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="DETAILS "
                label="DETAILS  "
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) =>
                  prevValues.gender !== currentValues.gender
                }
              >
                {({ getFieldValue }) =>
                  getFieldValue('gender') === 'other' ? (
                    <Form.Item
                      name="customizeGender"
                      label="Customize Gender"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  ) : null
                }
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                  Reset
                </Button>
                <Button type="link" htmlType="button" onClick={onFill}>
                  Fill form
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Users;

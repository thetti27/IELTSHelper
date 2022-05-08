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
import { useParams, useHistory } from 'react-router-dom';

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

  const [planType, setplanType] = useState('');
  const [description, setdescription] = useState('');
  const [amount, setamount] = useState('');
  const [details, setdetails] = useState('');

  let slug = useParams();
  const [Data, setData] = useState('');
  let history = useHistory();
  useEffect(() => {
    console.log('asas');
    axios({
      method: 'get',
      url: `http://127.0.0.1:8000/api/viewPlans`,
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        setData(response.data.filter((e) => Number(e.id) === Number(slug.id)));
        setplanType(
          response.data.filter((e) => Number(e.id) === Number(slug.id)).planType
        );
        setdescription(
          response.data.filter((e) => Number(e.id) === Number(slug.id))
            .description
        );
        setamount(
          response.data.filter((e) => Number(e.id) === Number(slug.id)).amount
        );
        setdetails(
          response.data.filter((e) => Number(e.id) === Number(slug.id)).details
        );
      })
      .catch((response) => {
        //handle error
        console.log(response);
      });
  }, []);

  console.log(history);
  console.log(slug);
  useEffect(() => {
    // let payLoad
    // console.log(slug);
    // console.log('slug');
  }, []);
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
  // const handleChange = (e, inputs) => {
  //   if (inputs === 'planType') {
  //     setAllInput()
  //   }
  //   if (inputs === 'type') {
  //     this.setState({
  //       type: e.target.value,
  //     });
  //   }
  // };
  const handleUpdates = (e, record) => {
    setplanType(record.planType);
    setdescription(record.description);
    setamount(record.amount);
    setdetails(record.details);
  };
  const deleteDoctors = async () => {
    await axios({
      method: 'delete',
      // url: `http://127.0.0.1:80/Y3S1-ITPM/Admin/Backend/deleteDoctor.php/${this.state.deleteDoctorId}`,
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {})
      .catch((response) => {
        console.log(response);
      });
  };
  return (
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
              label: 'pricing',
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
              label: 'logout',
            },
          ]}
        />
      </Header>
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
              flexDirection: 'column',
              width: '500px',
              margin: '0 auto',
            }}
          >
            <h2>Add Card Details</h2>
            <br />
            Card number
            <br />
            <Input
              value={planType}
              onChange={(e) => setplanType(e.target.value)}
            ></Input>
            Cardholder Name
            <br />
            <Input
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            ></Input>
            MM/YY
            <br />
            <Input
              value={amount}
              onChange={(e) => setamount(e.target.value)}
            ></Input>
            CVV
            <br />
            <Input
              value={details}
              onChange={(e) => setdetails(e.target.value)}
            ></Input>
            <>
              <br />
              <br />
              <Button
                style={{
                  background: '#001529',
                  borderColor: '#001529',
                  color: '#ffffff',
                }}
              >
                {'Pay Now'}
              </Button>
            </>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Users;

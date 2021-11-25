import { Dropdown, Menu } from 'antd';
import type { NextPage } from 'next';
import Image from 'next/image';

import { DownOutlined } from '@ant-design/icons';
import Layout from '@components/Layout';

const Home: NextPage = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <Layout title="홈">
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          중앙대 <DownOutlined />
        </a>
      </Dropdown>
    </Layout>
  );
};

export default Home;

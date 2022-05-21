import React from 'react';
import { Button, Layout } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

type Props = {};

const { Header } = Layout;

const ContentHeader = (props: Props) => {
  return (
    <Header style={{ backgroundColor: 'white' }}>
      <Button icon={<HomeOutlined />} type="link" href="/">
        Home
      </Button>
    </Header>
  );
};

export default ContentHeader;

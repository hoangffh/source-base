import React, { useState } from 'react';
import SideBar from './SideBar';


import {  Layout, theme } from 'antd';

const { Header, Content, Sider } = Layout;





const App= ({ children }: { children: any })  => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer ,colorBorderSecondary },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider  width={250}  className=" fixed top-0 left-0 transition-all duration-500" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
       <div className='h-[32px] m-4 rounded-md bg-white '></div>
        <SideBar theme="dark"   />
      </Sider>
      <Layout>
        <Header  style={{ padding: 0, background: colorBorderSecondary }} />
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24,  minHeight: '100vh', background: colorBgContainer }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
import React,{useState} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { DesktopOutlined,PieChartOutlined,FileOutlined,
    TeamOutlined,UserOutlined,} from '@ant-design/icons';
import 'antd/dist/antd.css';    
//import "./my-app/src/index.css";


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const NavBar = () => {
    const[collapsed,setCollapsed]=useState(false);

const onCollapse=(collapsed)=>{
    setCollapsed(!collapsed)
}

    return (
        <div>

      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
             Directory
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
           My Profile
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">USER1</Menu.Item>
              <Menu.Item key="4">USER2</Menu.Item>
              <Menu.Item key="5">USER3</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Hutech soutions ©2019 Created by people central</Footer>
        </Layout>
      </Layout>  
        </div>
    )
}

export default NavBar


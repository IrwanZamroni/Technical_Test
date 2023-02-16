import React from 'react'
import {  Layout, Typography,Input } from 'antd';
import { Avatar, } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { Header,  } = Layout;

const { Text, Link ,Title} = Typography;

const { Search } = Input;


const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

const headerStyle: React.CSSProperties = {
   
    color: 'gold',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: 'black',
    alignItems:"center",
    display:"flex",
    justifyContent:'space-between',
    

  };
  
  
const Navbar: React.FC = () => {
    
  
    return (
      <Layout style={{position: "sticky",
      top: 0,
      zIndex: 999}}>
            <Header style={headerStyle}>
           <Title style={{color:'gold'}} level={1}> Ant Design</Title>
            
           <Avatar icon={<UserOutlined />} style={{backgroundColor:'gray'}} />
            </Header>
            
      </Layout>
    );
  };
  
  export default Navbar;

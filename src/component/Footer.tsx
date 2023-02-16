import React from 'react'
import {  Layout, Typography} from 'antd';

const { Header,  } = Layout;

const { Title} = Typography;


const headerStyle: React.CSSProperties = {
   
    color: 'gold',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: 'black',
    alignItems:"center",
    display:"flex",
    justifyContent:'center',
    

  };
  
  
const Footer: React.FC = () => {
    
  
    return (
      <Layout >
            <Header style={headerStyle}>
           <Title style={{color:'gold'}} level={4}> Footer</Title>
            
           </Header>
            
      </Layout>
    );
  };
  
  export default Footer;

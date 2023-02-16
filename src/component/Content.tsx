import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';


import {  Layout, Card} from 'antd';








const { Meta } = Card;


const Contents: React.FC = () => {

   const [todo,setTodo] = React.useState([]);
   
   
   const [dat,setDat] = React.useState('2023-02-15');

  
   interface Todo{
    title:string;
    description:string;
    urlToImage:string;
    url:string;

   }
   const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
    setDat(dateString)
    
  };
  


    React.useEffect(() => {
   
        fetch(`https://newsapi.org/v2/everything?q=apple&from=${dat}&to=${dat}&sortBy=popularity&apiKey=1a1006e36166446e83416ddfe63ec58b`).then(response=>response.json()).then(res=>setTodo(res.articles))
        
        }, [dat,todo]);
        console.log(todo);
    return (
        <>
        
      <Layout style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <DatePicker onChange={onChange} style={{width:'300px',marginTop:'30px'}}/>

        {todo.length ===0? <Layout style={{justifyContent:"center",display:'flex',alignItems:'center'}}>Data Not Found</Layout>:  <Layout style={{display:'flex',flexDirection:"row",flexWrap:"wrap",justifyContent:'center',marginTop:"50px",gap:10}}>
            {todo.map((todo:Todo) => (
      <Card
      style={{ width: 300 }}
      cover={
        <img
          height='150px'
          alt="example"
          src={todo.urlToImage}
        />
      }
     
    >
      <Meta
        
        title={todo.title}
        description={todo.description}
        
      />
      <div style={{backgroundColor:"black",width:"max-content",padding:"5px",borderRadius:'10%',marginTop:"20px",color:'gold'}}>
   <a style={{color:"gold"}} href={todo.url}>Read More</a>
   </div>
    </Card>


   ))}</Layout>
    }
      
       
 
      
    
          
      </Layout>
      </>
    );
  };
  
  export default Contents;

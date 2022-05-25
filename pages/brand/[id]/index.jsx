import styled from "styled-components";
//import Announcement from "../../../components/Announcement";
import Navbar2 from "../../../components/Navbar"

import { useEffect, useState } from 'react';
//import css from '../index.module.css';

import {
    HomeOutlined
  } from "@material-ui/icons";
import axios from "axios";
import BCarosel from "../BCarosel";
import Newsletter from "../../../components/foot/Newsletter";
import Footer from "../../../components/foot/Footer";
import { useRouter } from 'next/router'
import Head from 'next/head'
const Brand = () => {
    const router = useRouter();
    const { id } = router.query;
    const [items, setItems] = useState([
      {id:1,name:'Test1'},
      {id:2,name:'Test2'},
      {id:3,name:'Test3'},
      {id:4,name:'Test4'},
    ])
    const [pro, setPro] = useState([])
      
    const [cat, setCategory] = useState({
        id:null,
        name:'',
        parent:'',
        status:0
    })
    useEffect(() => {
      //   let list=[]
      // axios.get(`http://localhost:8080/ecom-api/collections`)
      // .then(resp=>{
      //   console.log("res",resp.data.data)
      //    resp.data.data.map(it=>{
      //      if(it.brand_id==id)
      //      {
      //        list.push(it)
        
      //      }
         
      //    })
      //    console.log("list",list)
      //    setItems(list)
      // }).catch(err=>console.log(err))
           
    }, [])

    const handleSelectChange=(e)=>{     
        
      
        
    }
    function Sort(slist,value)
    {
      
    }


       

    return (
      <>
      <Navbar2 style={{marginBottom:'120px'}}/>
      <img style={{marginTop:'90px'}} width='100%' src='https://cdn.shopify.com/s/files/1/2337/7003/files/Gul-Ahmed-X-Laam-Desktop.jpg?v=1626338215'/>
      <Container>
       {items.map(cl=>(
          <div key={cl.id} style={{padding:'10px'}}>
            <h1 style={{marginLeft:'650px',marginRight:'auto',padding:'20px'}}>{cl.name}</h1>
            <BCarosel  />
          </div> 
       ))

       }   
      </Container>
      <Newsletter/>
      <Footer />
       </>
    );
};

export default Brand;






const Container = styled.div`
display:flex;
flex-direction:column;
`;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const FilterContainer = styled.div`
margin-top:80px;
  display: flex;
  justify-content: space-between;
`;
const GridArea = styled.div`
  display: flex;
  flex-direction:row;
  height:200px;
  
  
`;

const Filter = styled.div`
  //margin: 20px;
  display:flex;
  flex-direction:column;
  
  //height:40px;
  // background-color:white;
`;

const FilterHome = styled.div`
  //margin: 20px;
  display:flex;
  flex-direction:row;
  margin-left:30px
  //height:40px;
  
`;
const LeftBar = styled.div`
  margin-left:30px;
  margin-top:25px;
  width:350px;
  height:800px;
  margin-right:30px;
  // border-style:groove;
  box-shadow: 0 2px 2px rgb(11 25 28 / 10%);
`;

const FilterText = styled.span`
  font-size: 14px;
  padding:20px;
  margin-left:20px
`;
const FilterHomeText = styled.span`
  font-size: 14px;
  padding:6px;
  /* padding:20px;
  margin-top: 10px;
  margin-left:20px */
`;
const SortText = styled.span`
  font-size: 14px;
  
  
`;
const FilterTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  padding:20px;
  background-color:whitesmoke;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const Productshow = styled.div`
    padding: 20px;
    display: flex;
    flex-direction:row;
    
    flex-wrap: wrap;
    justify-content: space-between;
`;
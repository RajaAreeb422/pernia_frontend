import styled from "styled-components";
//import Announcement from "../../../components/Announcement";
import Navbar2 from "../../../components/Navbar"

import { useEffect, useState } from 'react';
//import css from '../index.module.css';

import {
    HomeOutlined,Info
  } from "@material-ui/icons";
import axios from "axios";

import Footer from "../../../components/foot/Footer";
import { useRouter } from 'next/router'
import brd from '../../../styles/brand.module.css'
import Head from 'next/head'
import Move from "./Move";
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
        let list=[]
      axios.get(`https://api.mazglobal.co.uk/maz-api/collections`)
      .then(resp=>{
        console.log("res",resp.data.data)
         resp.data.data.map(it=>{
           if(it.brand_id==id)
           {
             
             list.push(it)
           }
         
         })
         console.log("listtrtdhhf",list)
         setItems(list)
      }).catch(err=>console.log(err))
           
    }, [id])

    const handleSelectChange=(e)=>{     
        
      
        
    }
    function Sort(slist,value)
    {
      
    }


    return (
      <>
        <Head>
        <title>Brand</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar2 style={{marginBottom:'120px'}}/>
      {items.length!=0?
      <img className={brd.covImg}
      src='/perSlider.jpeg'/>:''}
      <div className={brd.container}>
        
       {items.length!=0?
       <> 
       {items.map(cl=>(
          <div key={cl.id} className={brd.mapImg}>
            <center><h1 style={{padding:'20px'}}>{cl.name}</h1></center>
            <Move id={cl.id}/>
          </div> 
       ))
        }
        </>:
        <>
        
        
        <div className={brd.gap}>
           
                <Info style={{fontSize:'28px'}}/>
                <h5>OOps! .No Collections are Available for now</h5>
                
              </div>
               
        </>
}
      </div>
      
      <Footer />
       </>
    );
};

export default Brand;






const Container = styled.div`
display:flex;
flex-direction:column;
margin-bottom:20px;
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
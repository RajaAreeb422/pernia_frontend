import styled from "styled-components";
//import Announcement from "../../../components/Announcement";
import Navbar2 from "../components/Navbar"
import Footer from "../components/foot/Footer";
import { useEffect, useState } from 'react';
 import css from '../styles/index.module.css';

import {
    HomeOutlined,Info
  } from "@material-ui/icons";
import axios from "axios";
import ProductItem from "../components/ProductItem";
import Head from 'next/head'
import { useRouter } from 'next/router'
import Newsletter from "../components/foot/Newsletter";
import { FlexFlowContext } from "twilio/lib/rest/flexApi/v1/flexFlow";

const All_Products = () => {
    const router = useRouter();
   
    const [items, setItems] = useState([])
    const [colname, setColName] = useState('')
    const [catname, setCatName] = useState('')
    
    const [cat, setCategory] = useState({
        id:null,
        name:'',
        parent:'',
        status:0
    })
    useEffect(() => {
        // let list=[]
        // axios.get(`https://perniacouture.pk/pernia-api/collections/${id}`)
        // .then(res=>{
        //    setColName(res.data.data.name)
        //    axios.get(`https://perniacouture.pk/pernia-api/categories/${res.data.data.category_id}`)
        //    .then(respo=>setCatName(respo.data.data.name))
        // }).catch(err=>console.log(err))
        if(router.query.text==''|| router.query.text==undefined)
        {
            setItems([])
        }
        else{
      axios.get(`https://perniacouture.pk/pernia-api/products`)
      .then(resp=>{
        let list=[]
         resp.data.data.map(it=>{
            console.log("name",it.name)
            console.log("text",router.query.text)
           if(it.name==router.query.text)
           {
            let pp = 'https://perniacouture.pk/pernia-api/' + it.path;
            pp=pp.toString();
            it['path']=pp
            console.log("ppp",pp)
             list.push(it)
             
           }
         
         })
         console.log("list",list)
         setItems(list)
      }).catch(err=>console.log(err))
    }      
    }, [router.query.text])

    const handleSelectChange=(e)=>{     
        
      
        
    }
    function Sort(slist,value)
    {
      
    }



{/* {items.length==0? <div style={{marginLeft:'auto',marginRight:'auto',marginTop:'200px',fontSize:'22px'}}>
                Sorry! ..Stock is Empty of this Category</div>:
                <> */}

       {/* {
                 spro.map((item) => (
                    <ProductItem item={item} key={item.id} />

                ))} */}          

    return (
      <>
      <Navbar2/>
        <Container>
           
           {items.length!=0?
            <FilterContainer>
            
            <FilterHome>
                <FilterHomeText>
                    <HomeOutlined/>
                    </FilterHomeText>
                    <FilterHomeText>
                        
                    </FilterHomeText>
            </FilterHome>
                
                
                    <SortText></SortText>
                    <Select>
                        <Option selected>Best Selling</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
               
            </FilterContainer>:''}


            {items.length!=0?
            <GridArea>
            <LeftBar>
            <Filter>  
            <FilterTitle style={{backgroundColor:'white'}}>FILTER PRODUCTS</FilterTitle>
            </Filter> 
            
            <Filter>
            <FilterTitle>Price</FilterTitle> 
              <FilterText className={css.pricebox}>
                  <input type='checkbox' id='' style={{display:'none'}}/>  
                  <input className={css.pricein} type='checkbox' id='price'/>
                    <label className={css.pricela} htmlFor="price">Rs. 5,000-10,000</label>  <br/>
                  <input className={css.pricein} type='checkbox' id='price'/>
                    <label className={css.pricela} htmlFor="price">Rs. 10,000-20,000</label> <br/>
                  <input className={css.pricein} type='checkbox' id='price'/>
                    <label className={css.pricela} htmlFor="price">Rs. 30,000-40,000</label>
              </FilterText>  
            </Filter>
            
            <Filter>
            <FilterTitle>Delivery</FilterTitle> 
              <FilterText> 
                <input className={css.pricein} type='checkbox' id='w1'/><label className={css.pricela} htmlFor="w1">1-2 Weeks </label><br />
                <input className={css.pricein} type='checkbox' id='w1'/><label className={css.pricela} htmlFor="w1">3-4 Weeks </label><br />
                <input className={css.pricein} type='checkbox' id='w1'/><label className={css.pricela} htmlFor="w1">5-6 Weeks </label><br />
              </FilterText>  
            </Filter>

            <Filter>
            <FilterTitle>Size</FilterTitle> 
              <FilterText>
                  <input className={css.pricein} type='checkbox' id='price'/><label className={css.pricela} htmlFor="price">XL</label> <br />
                  <input className={css.pricein} type='checkbox' id='price'/><label className={css.pricela} htmlFor="price">L</label> <br />
                  <input className={css.pricein} type='checkbox' id='price'/><label className={css.pricela} htmlFor="price">M</label> <br />
                  <input className={css.pricein} type='checkbox' id='price'/><label className={css.pricela} htmlFor="price">S</label> <br />
                  <input className={css.pricein} type='checkbox' id='price'/><label className={css.pricela} htmlFor="price">XS</label> 
              </FilterText>  
            </Filter>

            </LeftBar>   
            <Productshow>
              {items.map((it,key)=>(
                 <ProductItem item={it} key={key}/>
                 
              ))

              }         
       
            </Productshow>


            </GridArea>:
            <center>
            <div style={{marginBottom:'100px',marginTop:'40px'}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',width:'100%'}}>
                <Info style={{fontSize:'28px'}}/>
                <p>No Product Found...</p>
                
                </div>
                </div>
                </center>
                }
            
            <Newsletter/>
            <Footer/>
           
        </Container>
        
       </>
    );
};

export default All_Products;






const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const FilterContainer = styled.div`
  margin-top:60px;
  display: flex;
  justify-content: space-between;
`;
const GridArea = styled.div`
  display: flex;
  flex-direction:row;
   
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
  flex:1;
 
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
    padding: 10px;
    flex:4;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    margin-left:70px;
`;
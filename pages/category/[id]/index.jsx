import styled from "styled-components";
//import Announcement from "../../../components/Announcement";
import Navbar2 from "../../../components/Navbar"
import Footer from "../../../components/foot/Footer";
import { useEffect, useState } from 'react';
import css from '../index.module.css';

import {
    HomeOutlined
  } from "@material-ui/icons";
import axios from "axios";
import ProductItem from "../../../components/ProductItem";
import Head from 'next/head'
import { useRouter } from 'next/router'
import Newsletter from "../../../components/foot/Newsletter";

const Category = () => {
    const router = useRouter();
    const { id } = router.query;
    const [items, setItems] = useState([])
    const [pro, setPro] = useState([
        {
            id:1,
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/33_bd16bfee-54ca-48c2-8003-31873146bada_300x.jpg?v=1645728681',
            name:'ABA',
            price:4000
        },
        {
            id:2,
            name:'ABA',
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/6_fe6aec3c-6c0b-4cec-8e29-0ed6f0708b99_300x.jpg?v=1643117474',
            price:6000
        },
        {
            id:3,
            name:'ABA',
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/47_07f61de4-5425-4719-923f-7ed46d3b5d9a_300x.jpg?v=1640871315',
            price:7000
        },
        {
            id:4,
            name:'ABA',
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/18_32a7bdbd-342c-444b-9bed-2bf0bd4b76bc_300x.jpg?v=1645729065',
            price:4000
        },
        {
            id:5,
            name:'ABA',
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/34_c3b08635-8f70-40fe-972b-f98415bc9e96_300x.jpg?v=1640871557',
            price:9000
        },
        {
            id:6,
            name:'ABA',
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/15_4378d18b-0701-4a7e-8abf-8712f57eef8f_300x.jpg?v=1637755377',
            price:7000
        },
        {
            id:8,
            name:'ABA',
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/65_3d68470d-de58-4c2b-9b09-3567722e2bc9_300x.jpg?v=1637756270',
            price:3000
        },
        {
            id:9,
            name:'ABA',
            img:'//cdn.shopify.com/s/files/1/2337/7003/products/2_ae09fef5-fd82-4c9b-aa0f-12383c54d218_300x.jpg?v=1646656226',
            price:4000
        },
        {
            id:10,
            name:'ABA',
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/54_34eb250d-e0b3-415d-8668-db1f2de4120a_300x.jpg?v=1637756407',
            price:9000
        },
        {
            id:11,
            name:'ABA',
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/85_9b729e8e-a389-460b-adf6-68b3ba5c5c04_300x.jpg?v=1645728747',
            price:7000
        },
        {
            id:12,
            name:'ABA',
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/248716558_2194102894063222_9121287402918461509_n_300x.jpg?v=1640211339',
            price:7000
        },
        {
            id:13,
            name:'ABA',
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/26_76b7ea66-5056-4ab1-a1b0-f5928c4b612d_300x.jpg?v=1637755257',
            price:7000
        },
    ])
    const [cat, setCategory] = useState({
        id:null,
        name:'',
        parent:'',
        status:0
    })
    useEffect(() => {
        let list=[]
      axios.get(`http://localhost:8080/ecom-api/products`)
      .then(resp=>{
        console.log("res",resp.data.data)
         resp.data.data.map(it=>{
           console.log("cid",it.collection_id,id)
           if(it.collection_id==id)
           {
             list.push(it)
             console.log("list",list)
           }
         
         })
         console.log("list",list)
         setItems(list)
      }).catch(err=>console.log(err))
           
    }, [])

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
           
            

            
            <FilterContainer>
            
            <FilterHome>
                <FilterHomeText>
                    <HomeOutlined/>
                    </FilterHomeText>
                    <FilterHomeText>
                        {">"} Unstiched {">"} Lawn
                    </FilterHomeText>
            </FilterHome>
                
                
                    <SortText></SortText>
                    <Select>
                        <Option selected>Best Selling</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
               
               

            </FilterContainer>

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
                    <label className={css.pricela} htmlFor="price">Rs. 30,000-3000</label>
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


            </GridArea>
            
            <Newsletter/>
            <Footer/>
           
        </Container>
        
       </>
    );
};

export default Category;






const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const FilterContainer = styled.div`
margin-top:100px;
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
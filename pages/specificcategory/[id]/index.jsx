import styled from "styled-components";
//import Announcement from "../../../components/Announcement";
import Navbar2 from "../../../components/Navbar"
import Footer from "../../../components/foot/Footer";
import { useEffect, useState } from 'react';
import css from '../index.module.css';
import ProductItem from "../../../components/ProductItem";
import {
    HomeOutlined,Info
  } from "@material-ui/icons";
import axios from "axios";

import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button } from "@material-ui/core";


const SpecificCategory = () => {
    const router = useRouter();
    const { id } = router.query;
    const [items, setItems] = useState([])
    const [priceSelected, setPrice] = useState('all')
    const [collections, setCollections] = useState([])
    const [catname, setCatName] = useState('')
    const [spin, setSpin] = useState(false)
    const [allProducts, setAllProducts] = useState([])
    const [cat, setCategory] = useState({
        id:null,
        name:'',
        parent:'',
        status:0
    })
    useEffect(() => {
      if(router.isReady)
    {
      setPrice('all')
      axios.get(`https://api.perniacouture.pk/pernia-api/categories/${id}`)
      .then(res=>{
       setCatName(res.data.data.name)
      }).catch(err=>console.log(err))
        axios.get(`https://api.perniacouture.pk/pernia-api/collections/category/${id}`)
        .then(res=>{
           setCollections(res.data.data)
           
           axios.get(`https://api.perniacouture.pk/pernia-api/products`)
           .then(resp=>{
              getProducts(res.data.data,resp.data.data)
            }).catch(err=>console.log(err))
    
         }).catch(err=>console.log(err))
 
             
        }
           
    }, [id])
    
    const getProducts=(coList,pList)=>{
      let list=[]
      coList.map((col)=>{
        pList.map(pr=>{
          if(pr.collection_id==col.id)
          {
              pr.path= 'https://api.perniacouture.pk/pernia-api/' + pr.path;
            
              list.push(pr)
          }
        })
        // axios.get(`https://api.perniacouture.pk/pernia-api/products/collection/${col.id}`)
        // .then(resp=>{
        //    let list1=[]
        //    list.push(resp.data.data)
        //     resp.data.data.map((pr,i)=>{
        //       pr.image_paths= 'https://api.perniacouture.pk/pernia-api/' + pr.image_paths;
        //       if(pr.path)
        //       pr.path='';
        //       pr["path"]=pr.image_paths
        //       list.push(pr)
        //      })
         
       
        // }).catch(error=>console.log(error))
      })    
       setItems(list)
       setAllProducts(list)
       setSpin(true) 


    }

    const onValueChange=(value)=>{    
      if(value!='all') 
      {
      setPrice(value)
     
      let list=[]
      let price1,price2;
      if(value=='5-10')
      {  
      price1=5000;
      price2=10000
      }
      else if(value=='10-20')
      {
        price1=11000;
      price2=20000
      }
      else{
        price1=30000;
      price2=40000
      }


      allProducts.map(it=>{
        if(it.price>price1 && it.price<price2)
        {
          list.push(it)
        }
      })
    
        setItems(list)
    }
    else{
      setPrice('all')
      setItems(allProducts)
    }
    }
    function move()
    {
      setPrice('')
      setItems(allProducts);
    }
    const handleSelling=e=>{
    
      console.log("in asending")
      if(e.target.value=="asc")
      {
      let list=items
      let sortedData = items.slice().sort((a, b) => a.price - b.price);
      list.sort(function(a, b){
        if(a.price<b.price)
        return 1;
    });
   
    setItems(sortedData)
  }
  else{
    let list=items
      let sortedData = items.slice().sort((a, b) => b.price - a.price);
      list.sort(function(a, b){
        if(a.price<b.price)
        return 1;
    });
  
    setItems(sortedData)
  
  }
    }

    
    return (
      <>
        <Head>
        <title>Specific Category</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar2/>
      <div className={css.container}>
           
      <div className={css.filterContainer}>
            
            <div className={css.filterHome}>
                <div className={css.filterHomeText}>
                    <HomeOutlined/>
                    </div>
                    <div className={css.filterHomeText}>
                        {catname}
                    </div>
                   </div>
                
                
                    <span className={css.sort}></span>
                    <select className={css.select} onChange={(e)=>handleSelling(e)}>
                        <option selected disabled>Best Selling</option>
                        <option value="asc">Price (asc)</option>
                        <option value="desc">Price (desc)</option>
                    </select>
               
               

            </div>
            
            {spin==true && items.length!=0?
            <div className={css.gridArea}>
            <div className={css.leftBar}>
            <div className={css.filter}>  
            <div className={css.filterTitle} style={{backgroundColor:'white'}}>
              FILTER PRODUCTS</div>
            </div> 
            
            <div className={css.filter}>
            <div className={css.filterTitle}>Price</div> 
              <div className={css.filterText}>
                  <input className={css.pricein} type='radio'
                   value='all'  
                   name="price"
                   checked={priceSelected==='all'}
                   onChange={()=>onValueChange('all')}
                  />
                    <label className={css.pricela} htmlFor="all">All</label>  <br/>
                  
                  <input className={css.pricein} type='radio'
                   value='5-10'  
                   name="price"
                   checked={priceSelected==='5-10'}
                   onChange={()=>onValueChange('5-10')}
                  />
                    <label className={css.pricela} htmlFor="5-10">Rs. 5,000-10,000</label>  <br/>
                  <input className={css.pricein} type='radio' value='10-20'
                    name="price"  checked={priceSelected==='10-20'}  onChange={()=>onValueChange('10-20')}/>
                    <label className={css.pricela} htmlFor="10-20" >Rs. 10,000-20,000</label> <br/>
                  <input className={css.pricein} type='radio' value='30-40' 
                   name="price"  checked={priceSelected==='30-40'}  onChange={()=>onValueChange('30-40')}/>
                    <label className={css.pricela} htmlFor="30-40" >Rs. 30,000-40,000</label>
              
              </div>  
            </div>
            
            

            <div className={css.filter}>
            <span className={css.filterTitle}>Size</span> 
              <span  className={css.filterText}>
                  <input className={css.pricein} type='checkbox' id='price' /><label className={css.pricela} htmlFor="price">XL</label> <br />
                  <input className={css.pricein} type='checkbox' id='price'/><label className={css.pricela} htmlFor="price">L</label> <br />
                  <input className={css.pricein} type='checkbox' id='price'/><label className={css.pricela} htmlFor="price">M</label> <br />
                  <input className={css.pricein} type='checkbox' id='price'/><label className={css.pricela} htmlFor="price">S</label> <br />
                  <input className={css.pricein} type='checkbox' id='price'/><label className={css.pricela} htmlFor="price">XS</label> 
              </span>  
            </div>

            </div>  
            {
              spin==true?
              <div className={css.productShow}>
                 {items.map((it,key)=>(
                 <ProductItem item={it} key={key}/>
             
         
              ))}
         
            </div>:<p>Loading.....</p>
            } 
            


            </div>:
            <center style={{marginBottom:'60px'}}>
            <div style={{marginBottom:'100px',marginTop:'40px'}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',width:'100%'}}>
                <Info style={{fontSize:'28px'}}/>
                <p>No Product Found...</p>
                
                </div>
                </div>

                <Button onClick={()=>move()}>Back To Categories Products</Button>
                </center>
                }
          
          
            <Footer/>
           
        </div>
        
       </>
    );
};

export default SpecificCategory;






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
  margin-bottom:50px; 
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
   
  height:auto;
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
  margin:6px;
  margin-right: 5%;
`;
const Option = styled.option``;

const Productshow = styled.div`
    padding: 10px;
    padding-top:0px;
   // margin-top:-60px;
    flex:4;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    margin-left:70px;
`;
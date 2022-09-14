import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import Link from "next/link";
  import { useEffect, useState } from 'react';
  import fea from "../styles/features.module.css";
import axios from'axios'
  
  
  const StoreCategories = () => {
    const [path,setPath]=useState('')
   
    const [items, setItems] = useState([])
    useEffect(() => {
      let list=[]
        axios
        .get(`https://api.perniacouture.pk/pernia-api/categories`)
        .then((resp) => {
          resp.data.data.map((it, i) => {
            if(it.name.toLowerCase()=='pret' || it.name.toLowerCase()=='luxury pret' 
            ||it.name.toLowerCase()=='unstiched')
            {
                it.path= 'https://api.perniacouture.pk/pernia-api/' + it.path;
                list.push(it);
            }
          
          });
          setItems(list);
          
        }) .catch((err) => console.log(err));
     
    }, [])
    const borderstyle={
      borderTop:'20px solid #F7F7F7',
    }
    return (
  
  
      <div className={fea.storeContainer}>
         <div style={borderstyle}>
          <h2 style={{textAlign:'center',padding:'8px',wordSpacing:'10px',fontWeight:'700'}}>
           Explore Stores 
            </h2>
            <center>
            <p>For All Your Fashion Needs</p>
            </center>
            </div>
        {items.length!=0?
        <>
         {items.map((catg,i) => (
            <Link key={i} href='/specificcategory/[id]' as={`/specificcategory/${catg.id}`} >

          <img style={{width:'100%'}} src={catg.path}  />
      
          
          </Link>
        )
        )
  }
  </>:''
        }
       
        
        
      </div>
    );
  };
  
  export default StoreCategories;
  
  const Context = styled.div`
   background:white;
   /* border:1px solid lightgrey; */
  
   
   align-items:space-between;
   
`;

const ReadyToShip= styled.div`

background:  #000536;
color:white;
font-weight:700px;
padding:4px;

`;
  
  
  const Border = styled.div`
  display:flex;
  
  flex-direction:column;
   /* border:1px solid lightgrey; */
   margin-top:0px; 
   min-width: 250px;
`;

  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
      margin-bottom:10px;
      margin-top:20px;
      width:100% !important;
      /* &:hover ${Info}{
      opacity: 1;
      
    } */
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;

const PriceCol = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
  `;

  
  const Image = styled.img`
    
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
  const Title = styled.p`
  font-size: 14px;
  /* display: flex; */
  margin-top: 300px;
  margin-left: 300px;
  align-items: center;
  justify-content: space-between;
  
  `;
  const TInfo = styled.div`
  position: absolute;
  margin-right: 100%;
 
  `;
  
  const StyledLink = styled(Link)`
                  color: #000000;
                  &:focus, &:hover, &:visited, &:link, &:active {
                      text-decoration: none;
      }
                  `;
  
import { Carousel } from "@trendyol-js/react-carousel";
//import Carousel from "react-bootstrap/Carousel";
import Highlight from "react-highlight";
import { useState, useEffect } from "react";
import Link from 'next/link'
import Deals_ItemLeft from "./Deals_Item";
import Deals_ItemRight from "./Deals_ItemRight";
import { useRouter } from 'next/router';
import { DeleteOutline, Edit } from '@material-ui/icons';
import axios from "axios";
import { List } from "reactstrap";
import Slide from "./Slide";
const Deals_Carosel = () => {
  const [tagid, setTagId] = useState(null)
  const [deals, setDeals] = useState([])
  const [box, setBox] = useState([
    {
      id: 1,
      text: "ABBB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Dastoor-Clothing_21_540x.jpg?v=1646470663",
    },
    {
      id: 2,
      text: "Sohail",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Hem_28_0238090f-6aa0-476c-8a60-38a35366fee7_540x.jpg?v=1646470690",
    },
    {
      id: 3,
      text: "Areebb",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Imrozia-Premium_63_540x.jpg?v=1646470651",
    },
    {
      id: 4,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Fascino_29_0fa00a47-e8e9-4351-b410-36c493666dac_540x.jpg?v=1646470731",
    },
  ]);

  useEffect(() => {
        let list=[]
     axios.get(`https://api.mazglobal.co.uk/maz-api/tags`)
     .then(res=>{
        res.data.data.map(tt=>{
          if(tt.name=='Deals of the Day'||tt.name=='deals of the day'||tt.name=='Deals of the day')
          {
          setTagId(tt.id)
          axios.get(`https://api.mazglobal.co.uk/maz-api/collections`)
     .then(resp=>{
       
        resp.data.data.map(it=>{
          if(it.tag_id==tt.id)
          {
            let pp = 'https://api.mazglobal.co.uk/' + it.path;
            pp=pp.toString();
            it.path=pp
          
            list.push(it)
          }
        
        })
      
        setDeals(list)
     }).catch(err=>console.log(err))
          
          }
        })
     }).catch(err=>console.log(err))
     
           
  }, [])


  const borderstyle={
    borderTop:'20px solid #F7F7F7',
  }
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          
        }}
      >

         
        <div style={borderstyle}>
         <center>
          <h2 style={{letterSpacing:'.15em',fontWeight:'600',
          marginTop:'10px',marginBottom:'20px',padding:'20px'}}>DEALS OF THE DAY</h2>
          </center>
         
          
          {deals.length!=0?
          <Slide deal={deals} /> 
           :''
          }
        </div>
      </div>
    </>
  );
};
export default Deals_Carosel;

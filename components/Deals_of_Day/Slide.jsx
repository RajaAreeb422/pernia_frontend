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
import Left from "./Left";
import Right from "./Right";
import nav from '../../styles/navbar.module.css'
const Slide = (props) => {
  const [tagid, setTagId] = useState(null)
  const [deals, setDeals] = useState([])
  const [box, setBox] = useState([
    {
      id: 1,
      text: "ABBB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/products/69_af682a68-5175-4fec-a69a-d89f055e57cf_300x.jpg?v=1645774308",
    },
   
  ]);

  
  useEffect(() => {
        console.log("props",props)
           
  }, [])


 
  return (
    <>
    <div className={nav.lgSc}>

          <Carousel  show={4} slide={2} swiping={true} 
          leftArrow={<Deals_ItemLeft/>} rightArrow={<Deals_ItemRight/>}>
              {
              props.deal.map((it,i) => (
             
                <Link key={it.id} href="/category/[id]" as={`/category/${it.id}`}> 

                  <div >
                  <img 
                  // src='https://cdn.shopify.com/s/files/1/2337/7003/files/mushq_-_2022-09-06T194930.201_48d6a401-4d8f-44fb-86cf-d351cfe8db20_370x.progressive.jpg?v=1662476523'
                  
                  src={it.path}
                  style={{width:'312px' }}/>
                 
                  </div> 
                  </Link>     
          
              ))
              }
          </Carousel>

          </div>
          <div className={nav.smallSc}>
          <Carousel  show={2} slide={1} swiping={true} leftArrow={<Left/>} rightArrow={<Right/>}>
              {
              props.deal.map((it,i) => (
             
                <Link key={it.id} href="/category/[id]" as={`/category/${it.id}`}>
                  <div>
                  {/* <img 
                  // src='https://cdn.shopify.com/s/files/1/2337/7003/files/mushq_-_2022-09-06T194930.201_48d6a401-4d8f-44fb-86cf-d351cfe8db20_370x.progressive.jpg?v=1662476523'
                   
                  src={it.path}
                   style={{width:'100%',height:'300px'}}/> */}
                   <img src={it.path} style={{width:'94%',height:'270px'}}/>
                  
                  </div> 
                 
                  
                  </Link>     
          
              ))
              }
          </Carousel>
          </div>
         
      
    </>
  );
};
export default Slide;

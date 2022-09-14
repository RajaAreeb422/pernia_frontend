import { Carousel } from "@trendyol-js/react-carousel";
//import Carousel from "react-bootstrap/Carousel";
import Highlight from "react-highlight";
import { useState, useEffect } from "react";
import Link from 'next/link'

import { useRouter } from 'next/router';
import { DeleteOutline, Edit } from '@material-ui/icons';
import axios from "axios";
import { List } from "reactstrap";
import nav from '../../styles/navbar.module.css'

const ASlide = (props) => {
  const [tagid, setTagId] = useState(null)
  const [bname, setBName] = useState([])
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
          <Carousel  show={6} slide={1} swiping={true}>
              {
              props.deal.map((it,i) => (
             
                <Link key={it.id} href="/category/[id]" as={`/category/${it.id}`}>
                  <div style={{borderRadius:'6px'}}>
                  <img src={it.path}
                  style={{width:'200px'}}/>
                  
                  </div> 
                 
                  
                  </Link>     
          
              ))
              }
          </Carousel>
          </div>   

          <div className={nav.mbView}>
          
              {
              props.deal.map((it,i) => (
             
                <Link key={it.id} href="/category/[id]" as={`/category/${it.id}`}>
                  <div>
                  <img src={it.path} style={{width:'100%',height:'170px'}}/>
                  
                  </div> 
                 
                  </Link>     
          
              ))
              }
          
          </div>
      
    </>
  );
};
export default ASlide;

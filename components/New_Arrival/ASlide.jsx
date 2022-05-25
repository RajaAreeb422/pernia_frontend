import { Carousel } from "@trendyol-js/react-carousel";
//import Carousel from "react-bootstrap/Carousel";
import Highlight from "react-highlight";
import { useState, useEffect } from "react";
import Link from 'next/link'
import Arrival_Item from "./Arrival_Item";
import Arrival_ItemRight from "./Arrival_ItemRight";
import { useRouter } from 'next/router';
import { DeleteOutline, Edit } from '@material-ui/icons';
import axios from "axios";
import { List } from "reactstrap";
const ASlide = (props) => {
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

          <Carousel style={{ width: "360px!important" }} show={3.5} slide={1} swiping={true} leftArrow={<Arrival_Item/>} rightArrow={<Arrival_ItemRight/>}>
              {
              props.deal.map((it,i) => (
             
                <Link key={it.id} href="/category/[id]" as={`/category/${it.id}`}> 
                  <img src={box[0].img} style={{ height: "450px" }}/>
                  </Link>     
          
              ))
              }
          </Carousel>
         
      
    </>
  );
};
export default ASlide;

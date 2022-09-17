import { Carousel } from "@trendyol-js/react-carousel";
//import Carousel from "react-bootstrap/Carousel";
import Highlight from "react-highlight";
import { useState, useEffect } from "react";
import Link from "next/link";
import nav from "../styles/navbar.module.css";
import axios from 'axios'
import ItemLeft from "./Item";
import ItemRight from "./ItemRight";
const Related = ({items}) => {
  const [collections, setCollections] = useState([])

  const [allproducts, setAllProducts] = useState([])
  const [box, setBox] = useState([
    {
      id: 1,
      text: "ABBB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Asifa-_-Nabeel_4fc01449-2411-4a63-9760-65c5d5441068_540x.jpg?v=1646579962",
    },
    {
      id: 2,
      text: "Sohail",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/MARIA.B_640c3932-3eb0-4b15-9b93-93547fbca9b3_540x.jpg?v=1646724914",
    },
    {
      id: 3,
      text: "Areebb",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Noor-By-Sadia-Asad_20_540x.jpg?v=1646470367",
    },
    {
      id: 4,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Sable-Vogue_86e7fba4-c857-4c0e-9339-4d0e318d04fe_540x.jpg?v=1646660689",
    },
  ]);

  useEffect(() => {


           
      
         
  }, [])
  


  








  return (
    <>
    <div className={nav.lgSc} style={{padding:'8px'}}>
  
       
         {items.length!=0?
          <Carousel show={4} slide={1} swiping={true} leftArrow={<ItemLeft/>} rightArrow={<ItemRight/>}>
            
              {items.map((it,i) => (
                <Link key={i} href='/product/[id]' as={`/product/${it.id}`} >
                <img  key={it.id} src={it.path} style={{ height: "420px" }} />
                </Link>
          
              ))}
            
          </Carousel>:''
}
       
    </div>
    <div className={nav.smallSc}>
  
       
         {items.length!=0?
          <Carousel show={2} slide={1} swiping={true} leftArrow={<ItemLeft/>} rightArrow={<ItemRight/>}>
            
              {items.map((it,i) => (
                <Link key={i} href='/product/[id]' as={`/product/${it.id}`} >
                 <img src={it.path} style={{width:'94%',height:'270px'}}/>
                </Link>
          
              ))}
            
          </Carousel>:''
}
       
    </div>
    </>
  );
};
export default Related;

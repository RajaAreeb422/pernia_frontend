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
import nav from '../../styles/navbar.module.css'
import Left from "./Left";
import Right from "./Right";
const ASlide = (props) => {
  const [tagid, setTagId] = useState(null)
  const [bname, setBName] = useState([])
  const [deals, setDeals] = useState([])
  const [box, setBox] = useState([
    {
      id: 1,
      text: "ABBB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Summer-Clearance_1_3ab9ffa7-e2f8-4d75-adcf-d67d2c30364c_370x.progressive.jpg?v=1662119069",
    },
    {
      id: 87,
      text: "ABBB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Garnet-Clothing_-_2022-09-06T192719.132_370x.progressive.jpg?v=1662474587",
    },
    {
      id: 2,
      text: "ABBB",
      img:'/c1.jpeg'
    },
    {
      id: 3,
      text: "ABBB",
      img:'/c2.jpeg'
    },
    {
      id: 4,
      text: "ABBB",
      img:'/c3.jpeg'
    },
    {
      id: 5,
      text: "ABBB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Garnet-Clothing_-_2022-09-06T192719.132_370x.progressive.jpg?v=1662474587",
    },
    {
      id: 6,
      text: "ABBB",
      img:'/c1.jpeg'
    },
    {
      id: 7,
      text: "ABBB",
      img:'/c2.jpeg'
    },
   
  ]);

  
  useEffect(() => {
        console.log("props",props)
      
           
  }, [])


 
  return (
    <>
          <div className={nav.lgSc} style={{width:'98% !important',margin:'20px'}}>
          <Carousel  show={4} slide={1} swiping={true} leftArrow={<Arrival_Item/>} rightArrow={<Arrival_ItemRight/>}>
              {
              props.deal.map((it,i) => (
             
                <Link key={it.id} href="/category/[id]" as={`/category/${it.id}`}>
                  <div>
                  <img 
                  src={box[i].img}
                  style={{ width:'312px',height:'450px',borderRadius:'8px'}}/>
                  {/* <div style={{backgroundColor:'white',height:'70px',width:'300px',border:'2px solid whitesmoke',marginLeft:'25px'}}>
                  <h4 style={{textAlign:'center',marginTop:'8px'}}>{it.brand}</h4>
                  <h5 style={{textAlign:'center',marginTop:'15px'}}>{it.name}</h5>
              
                  </div> */}
                  </div> 
                 
                  
                  </Link>     
          
              ))
              }
          </Carousel>
          </div>   

          <div className={nav.smallSc}>
          <Carousel controls={false} show={2} slide={1} swiping={true} leftArrow={<Left/>} rightArrow={<Right/>}>
              {
              props.deal.map((it,i) => (
             
                <Link key={it.id} href="/category/[id]" as={`/category/${it.id}`}>
                  <div>
                  <img src={box[i].img} style={{width:'100%',height:'300px'}}/>
                  </div>             
                  </Link>     
          
              ))
              }
          </Carousel>
          </div>
      
    </>
  );
};
export default ASlide;

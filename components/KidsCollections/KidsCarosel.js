import { Carousel } from "@trendyol-js/react-carousel";
//import Carousel from "react-bootstrap/Carousel";
import Highlight from "react-highlight";
import { useState, useEffect } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router';
import { DeleteOutline, Edit } from '@material-ui/icons';
import axios from "axios";
import { List } from "reactstrap";
import ASlide from "./ASlide";
const KidsCarosel = () => {
  const [tagid, setTagId] = useState(null)
  const [deals, setDeals] = useState([])
  const [box, setBox] = useState([
   
  ]);

  useEffect(() => {
       
      axios.get(`https://api.mazglobal.co.uk/maz-api/collections`)
     .then(resp=>{
       let list=[]
        resp.data.data.map(it=>{
          if(it.category_id==96)
          { 
            let pp = 'https://api.mazglobal.co.uk/' + it.path;
            pp=pp.toString();
            it['path']=pp
          
            list.push(it)
          
          }
        
        })
       
        setDeals(list)
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
          padding:"8px",
        }}
      >

         
        <div style={borderstyle}>
          <h2 style={{textAlign:'center',padding:'8px',wordSpacing:'10px',fontWeight:'700'}}>
           THE KIDS EDIT - THE VERY BEST FROM KIDSWEAR
            </h2>

         
          
          {deals.length!=0?
          <ASlide deal={deals} /> 
           :''
          }
        </div>
      </div>
    </>
  );
};
export default KidsCarosel;

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
import ASlide from "./ASlide";
const ArrivalCarosel = () => {
  const [tagid, setTagId] = useState(null)
  const [deals, setDeals] = useState([])
  const [box, setBox] = useState([
   
  ]);

  useEffect(() => {
        let list=[]
     axios.get(`https://api.perniacouture.pk/pernia-api/tag`)
     .then(res=>{
        res.data.data.map(tt=>{
          if(tt.name=='Newly Coming')
          {
          setTagId(tt.id)
          axios.get(`https://api.perniacouture.pk/pernia-api/collections`)
     .then(resp=>{
     
        resp.data.data.map(it=>{
          if(it.tag_id==tt.id)
          { 
            let pp = 'https://api.perniacouture.pk/pernia-api/' + it.path;
            pp=pp.toString();
            it.path=pp
            
            list.push(it)
         
            axios.get(`https://api.perniacouture.pk/pernia-api/suppliers/${it.brand_id}`)
            .then(res=>{
              it['brand']=res.data.data.name
            }
              )
            .catch(err=>console.log(err))
           
            
          
             
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
          marginTop:'10px',marginBottom:'20px',padding:'20px'}}>New Arrivals</h2>
          </center>
        

         
          
          {deals.length!=0?
          <ASlide deal={deals} /> 
           :''
          }
        </div>
      </div>
    </>
  );
};
export default ArrivalCarosel;

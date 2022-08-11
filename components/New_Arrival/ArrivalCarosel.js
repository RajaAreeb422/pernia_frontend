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
       console.log("res",resp.data.data)
        resp.data.data.map(it=>{
          if(it.tag_id==tt.id)
          { 
            let pp = 'https://api.perniacouture.pk/pernia-api/' + it.path;
            pp=pp.toString();
            it['path']=pp
            console.log("ppp",pp)
            list.push(it)
         
            axios.get(`https://api.perniacouture.pk/pernia-api/suppliers/${it.brand_id}`)
            .then(res=>{
              it['brand']=res.data.data.name
            }
              )
            .catch(err=>console.log(err))
           
            
          
             
          }
        
        })
        console.log("list",list)
        setDeals(list)
     }).catch(err=>console.log(err))
          console.log("id",tt.id)
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
          <h2 style={{marginLeft:'30px',fontSize:'1.8em',letterSpacing:'.15em',marginTop:'20px',marginBottom:'20px'}}>New Arrivals</h2>

         
          
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

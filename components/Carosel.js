import { Carousel } from "@trendyol-js/react-carousel";
//import Carousel from "react-bootstrap/Carousel";
import Highlight from "react-highlight";
import { useState, useEffect } from "react";
import nav from "../styles/navbar.module.css";
import axios from 'axios'
import ItemLeft from "./Item";
import ItemRight from "./ItemRight";
import Related from "./Related";
const Carosel = ({category}) => {
  const [collections, setCollections] = useState([])
  const [items, setItems] = useState([])
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

    console.log("cat",category)
   
      axios.get(`https://api.mazglobal.co.uk/maz-api/collections/category/${category}`)
      .then(res=>{
         setCollections(res.data.data)
         
         axios.get(`https://api.mazglobal.co.uk/maz-api/products`)
         .then(resp=>{
            getProducts(res.data.data,resp.data.data)
          }).catch(err=>console.log(err))
  
       }).catch(err=>console.log(err))

           
      
         
  }, [])
  
  const getProducts=(coList,pList)=>{
    let list=[]
    coList.map((col)=>{
      pList.map(pr=>{
        if(pr.collection_id==col.id)
        {
            pr.path= 'https://api.mazglobal.co.uk/' + pr.path;
          
            list.push(pr)
        }
      })
    })    
    console.log("list",list)
     setItems(list)
     setAllProducts(list)
   

  }








  const borderstyle={
 
    width:'95%',
    marginLeft:'auto',
    marginRight:'auto'
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
          <h2
        style={{
          marginLeft: "30px",
          fontSize: "1.8em",
          padding:'8px',
          letterSpacing: ".15em",
        }}
      >
        Related Products
      </h2>
          </center>
       
       
         {items.length!=0?
         <Related items={items}/>:''
         
}
         
        </div>
      </div>
    </>
  );
};
export default Carosel;

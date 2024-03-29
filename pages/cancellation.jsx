import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import Head from 'next/head'
// import { mobile } from "../pages/responsive";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/foot/Footer";
import { Button } from "reactstrap";
import Newsletter from "../components/foot/Newsletter";
import can from '../styles/cancel.module.css'
const Cancellation = () => {
return(
    <>
      <Head>
        <title>Cancellation</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
    <Navbar/>
    <div className={can.container}>
      <center>

        <img className={can.imgg}
        src='https://cdn.shopify.com/s/files/1/2337/7003/files/New_Project_12_256x256_crop_center.png?v=1624868361'/>
       </center>
       <center>
       <h2 style={{padding:'20px'}}>
      ORDER CANCELLATION POLICY   
      </h2>
       </center>
      <center>
      <h5 style={{padding:'20px'}}>
      HOW TO REQUEST FOR AN ORDER CANCELLATION?
        </h5>  
      </center>
      
        <p className={can.text}>
        To request for an order cancellation please email us the order # with product name, 
        original proof of purchase receipt and issue at customercare@pernia.pk and our customer care 
        agent will get in contact with you. Alternatively you can call us on +92 316 7776158 from
         Monday to Saturday between 10:00 am - 6:00 pm (Pakistan Standard Time). Further, to proceed with the case,
          your purchase should be sent back to us within 14 days of receiving your order.
        </p>
     <div className={can.Div}>
         <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
       <input className={can.input} type='text' placeholder="Order number"/>
       <input className={can.input} type='email' placeholder="Email"/> 
       </div> 
       <input className={can.input} type='text' placeholder="Product Name"/>
         <select className={can.selct} name='select'>
             <option>Request of Refund</option>
             <option>Request for Exchange</option>
             <option>Request for Return</option>
         </select>
         <button className={can.btn}>Send</button>
     </div>

    </div>
    
    <Footer/>
    </>
)
}
export default Cancellation;
const Container1 = styled.div`
    background-color:white;
    margin-top:18px;
    
  `;
  const Div= styled.div`
  display:flex;
  flex-direction:column;
  width:400px;
  margin-left:auto;
  margin-right:auto;
  
  `;
   const H2 = styled.div`
   color:black;
   font-weight:600px;
   font-size:24px;
   margin-top:30px;
   margin-bottom:30px;
   text-align:center;
   
   `;
   const H = styled.div`
   color:black;
   font-weight:700;
   font-size:20px;
   margin-top:30px;
   margin-bottom:30px;
   text-align:center;
   
   `;
    const P = styled.div`
    color:grey;

    justify-content:justify;
    width:800px;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:20px;
    
    `;
     const Input = styled.input`
     
     padding:4px;
     border-radius:4px;
     border-style:groove;
     height:40px;
     margin-right:10px;
     margin-top:20px;
     margin-bottom:10px;
     
     `;
     const Select = styled.select`
     
     padding:4px;
     border-radius:4px;
     border-style:groove;
     height:40px;
     margin-top:20px;
     margin-bottom:10px;
     
     `;
     const Img = styled.img`
     
     margin-left:750px;
     margin-right:600px;
     height:50px;
     margin-top:20px;
     margin-bottom:10px;
     
     `;

const Button1 = styled.button`
width:200px;
background-color:black;
color:white;
padding:10px;
margin-left:auto;
margin-right:auto;
margin-bottom:30px;
margin-top:20px;
`;
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";

// import { mobile } from "../pages/responsive";
import Link from "next/link";
import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/foot/Footer";
import { Button } from "reactstrap";
import ship from '../styles/shipanddlv.module.css'
const ShipAndDlv = () => {
return(
    <>
      <Head>
        <title>Ship and Dlv</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
    <Navbar/>
    <div className={ship.container}>
      <center>
        <img  className={ship.img1} src='https://cdn.shopify.com/s/files/1/2337/7003/files/New_Project_8_256x256_crop_center.png?v=1623912436'/>
        </center>
      <center>
      <h2>
      SHIPPING 
      </h2>
        </center>  
      
        
        <p className={ship.P2} style={{padding:'10px',textAlign:'center'}}>
        We strive to deliver products purchased from Pernia in a highly specialized manner along with 
        ensuring that the outfit is sanitized, packed modestly, and is delivered at your doorsteps in the shortest 
        time possible.
        </p>
        <center>

        
        <img  className={ship.img2} src='https://cdn.shopify.com/s/files/1/2337/7003/files/New_Project_9_256x256_crop_center.png?v=1623912436'/>
        </center>
        <center>
        <h2>ZONE DIVISIONS</h2>
        </center>

       
     <div className={ship.Div}>
       
           <div className={ship.icon}>
             <p className={ship.p}>Zone1</p>
             <p className={ship.p}> Australia</p>
             <hr/>
             <button className={ship.btn}>More</button>
           </div>
           <div className={ship.icon}>
             <p className={ship.p}>Zone2</p>
             <p className={ship.p}>Europe</p>
             <hr/>
             <button className={ship.btn}>More</button>
           </div>
           <div className={ship.icon}>
             <p className={ship.p}>Zone3</p>
             <p className={ship.p}>India</p>
             <hr/>
             <button className={ship.btn}>More</button>
           </div> 
           <div className={ship.icon}>
             <p className={ship.p}>Zone4</p>
             <p className={ship.p}>Gulf</p>
             <hr/>
             <button className={ship.btn}>More</button>
           </div> 
     </div>
     <center>

    
     <img  className={ship.img2}src='https://cdn.shopify.com/s/files/1/2337/7003/files/New_Project_10_256x256_crop_center.png?v=1623931521'/>
     </center>
     <center>
     <h2>DELIVERY TIMELINE</h2>
     </center>
      
      <div className={ship.smallDiv}>
      <div className={ship.icon1}>
         <p> Pret</p> 
         <p>4-5 weeks</p>
      </div>
      <div className={ship.icon1}>
         <p>Formals</p> 
         <p>6-8 weeks</p>
      </div>
      <div className={ship.icon1}>
         <p>Bridals</p> 
         <p>8-12 weeks</p>
      </div>
      <div className={ship.icon1}>
         <p>Unstitched</p> 
         <p>7 days</p>
      </div>
      </div>
    </div>
   
    <Footer/>
    </>
)
}
export default ShipAndDlv;
const Icon= styled.div`
margin-right:30px;
background-color:whitesmoke;
width:600px;
height:180px;
margin-bottom:30px;   
  `;

const Icon1= styled.div`
margin-right:30px;
background-color:whitesmoke;
width:140px;
height:50px;
margin-bottom:30px;   
  `;
const Container1 = styled.div`
    background-color:white;
    margin-top:28px;
    
  `;
  const Div= styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
  width:85%;
  margin-left:auto;
  margin-right:auto;
  
  `;
  const SmallDiv= styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  width:80%;
  margin-left:auto;
  margin-right:auto;
  justify-content:center;
  
  `;
   const H2 = styled.div`
   color:black;
   font-weight:600px;
   font-size:24px;
   margin-top:10px;
   margin-bottom:30px;
   text-align:center;
   
   `;
   const H = styled.div`
   color:black;
   font-weight:700;
   font-size:20px;
   margin-top:10px;
   margin-bottom:20px;
   text-align:center;
   
   `;
    const P = styled.div`
    color:grey;
    justify-content:center;
    width:40%;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:20px;
    
    `;
     const P1 = styled.div`
    
     font-weight:600;
     margin-top:20px;
    
     margin-right:270px;
     margin-left:280px;
     
     
     `;
      const P3 = styled.div`
    
      font-weight:600;
      margin-left:30px;
      margin-right:30px;
 
      
      
      
      `;
       const P4 = styled.div`
    
       font-weight:400;
       margin-left:30px;
       margin-right:30px;

       
       
       
       `;
      const P2 = styled.div`
      color:grey;
      text-align:center;
      font-weight:500
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
     
   
     height:50px;
     margin-top:20px;
     margin-bottom:10px;
     
     `;

const Img2 = styled.img`
margin-left:auto;
margin-right:auto;    
height:50px;
margin-top:10px;
margin-bottom:10px;

`;

const Button1 = styled.button`
width:50px;
background-color:transparent;
color:black;
border-radius:4px;
padding:2px;
margin-left:280px;
margin-right:260px;

margin-top:10px;
`;
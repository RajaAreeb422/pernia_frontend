import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";

// import { mobile } from "../pages/responsive";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from 'next/head'
import Footer from "../components/foot/Footer";
import { Button, Container } from "reactstrap";
import tr from '../styles/track.module.css'
const Track = () => {
    return(
    <>
      <Head>
        <title>Tracking</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
    <Navbar/>
    <div className={tr.container}>
    <h3 className={tr.H}>
      Track Your Order
    </h3>
    <p className={tr.P}>
    Please enter your email address and order number to track your order   
    </p>
    <div className={tr.Div}>
    <input className={tr.input} type='text' placeholder="Pernia 123"></input>
    <input className={tr.input} type='text' placeholder="Pernia @gmail.com"></input>
    <button className={tr.btn}>Track</button>
    </div>
    </div>
    
    <Footer/>
    </>
    )
}
export default Track;

const Container1 = styled.div`
    background-color:white;
    margin-top:28px;
    
  `;
  const Div= styled.div`
  display:flex;
  flex-direction:column;
  width:600px;
  margin-left:auto;
  margin-right:auto;
  
  `;
   const H2 = styled.h4`
   color:black;

   margin-bottom:30px;
   text-align:center;
   
   `;
    const P = styled.div`
    color:grey;
    text-align:center;
    margin-bottom:20px;
    
    `;
     const Input = styled.input`
     
     padding:4px;
     border-radius:4px;
     border-style:groove;
     height:40px;
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
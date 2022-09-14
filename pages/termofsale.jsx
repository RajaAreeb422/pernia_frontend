import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";

// import { mobile } from "../pages/responsive";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/foot/Footer";
import { Button } from "reactstrap";
import Head from 'next/head'
import Newsletter from "../components/foot/Newsletter";
const TermOfSale = () => {
return(
    <>
      <Head>
        <title>Connect</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
    <Navbar/>
    <Container>
    <div style={{padding:'10px'}}>
    <h5 >Term of Sale</h5>
    </div>
    <p>
      
    </p>
    </Container>
    {/* <Newsletter/> */}
    <Footer/>
    </>
)

}
export default TermOfSale;
const Container = styled.div`
    background-color:whitesmoke;
    
    margin-bottom:20px;
  `;
  const Contact = styled.div`
  margin-left:170px;
  margin-top:70px;
  
`;
const ButtonC = styled.button`
  width:1000px;
  height:40px;
  background-color:green;
  margin-bottom:40px;
  color:white;
  margin-left:230px;
`;
const P= styled.div`
color:grey;
margin-bottom:50px;

`;
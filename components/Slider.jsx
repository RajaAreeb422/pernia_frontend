import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
// import { mobile } from "../pages/responsive";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import nav from '../styles/navbar.module.css'
//import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className={nav.sliderCont}>
      <div style={{marginBottom:'0px'}}>
    <Carousel controls={false}>
      <Carousel controls={false}>
   {sliderItems.map((it,key)=>(
     <Carousel.Item key={key} interval={5000}>
     <img
       style={{width:'100%'}}
       src={it.img}
       alt="First slide"
     /> 
     </Carousel.Item>
   ))}     
  
  
</Carousel>
    </Carousel>
</div>
      
    </div>
  );
};

export default Slider;



const Container = styled.div`
  width: 100% !important;
  display: flex;
  position: relative;
  overflow: hidden;
  
  `;

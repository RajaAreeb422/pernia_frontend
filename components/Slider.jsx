import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
// import { mobile } from "../pages/responsive";
import Link from "next/link";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
    <Container>
      <div style={{marginBottom:'60px'}}>
    <Carousel>
      <Carousel>
   {sliderItems.map((it,key)=>(
     <Carousel.Item key={key} interval={5000}>
     <img
       style={{width:'100%',padding:'10px'}}
       src={it.img}
       alt="First slide"
     />
     
   </Carousel.Item>
   ))}     
  
  
</Carousel>
    </Carousel>
</div>
      {/* <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
           
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow> */}
    </Container>
  );
};

export default Slider;



const Container = styled.div`
  width: 100%;
  display: flex;
  
  height:70vh;
  position: relative;
  overflow: hidden;
  
  `;
  /* ${mobile({ display: "none" })} */


const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #b6b6b6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;


const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
 transition: all .5s ease;
    color: #000000;
    border: 2px solid black;
    cursor:pointer;
   
    text-transform: uppercase;
    text-align: center;
    line-height: 1;
    font-size: 20px;
    background-color : transparent;
    padding: 15px;
    outline: none;
    border-radius: 4px;
    
    &:hover {
    color: #ffffff;
    background-color: teal;
    border: 2px solid teal;
}
`;
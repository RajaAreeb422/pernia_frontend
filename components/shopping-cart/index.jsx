import { useSelector } from 'react-redux';
import Item from './item';
import styled from "styled-components";
import { useState, useEffect } from "react";
//import { mobile } from "../../pages/responsive";
import Link from 'next/link'

const ShoppingCart = () => {
    const [cartItem, setPro] = useState([
        {
            id:1,
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/33_bd16bfee-54ca-48c2-8003-31873146bada_300x.jpg?v=1645728681',
            name:'Lawn',
            price:4000
        },
        {
            id:2,
            name:'Cotton',
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/6_fe6aec3c-6c0b-4cec-8e29-0ed6f0708b99_300x.jpg?v=1643117474',
            price:6000
        },
        {
            id:3,
            name:'Unstiched',
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/47_07f61de4-5425-4719-923f-7ed46d3b5d9a_300x.jpg?v=1640871315',
            price:7000
        },
        {
            id:4,
            name:'Lehnga',
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/18_32a7bdbd-342c-444b-9bed-2bf0bd4b76bc_300x.jpg?v=1645729065',
            price:4000
        },
        {
            id:5,
            name:'Mexi',
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/34_c3b08635-8f70-40fe-972b-f98415bc9e96_300x.jpg?v=1640871557',
            price:9000
        },
        {
            id:6,
            name:'Wool',
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/15_4378d18b-0701-4a7e-8abf-8712f57eef8f_300x.jpg?v=1637755377',
            price:7000
        },
        {
            id:8,
            name:'ABA',
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/65_3d68470d-de58-4c2b-9b09-3567722e2bc9_300x.jpg?v=1637756270',
            price:3000
        },
        {
            id:9,
            name:'ABA',
            img:'//cdn.shopify.com/s/files/1/2337/7003/products/2_ae09fef5-fd82-4c9b-aa0f-12383c54d218_300x.jpg?v=1646656226',
            price:4000
        },
        {
            id:10,
            name:'ABA',
            img:'https://cdn.shopify.com/s/files/1/2337/7003/products/54_34eb250d-e0b3-415d-8668-db1f2de4120a_300x.jpg?v=1637756407',
            price:9000
        },
        
    ])
  const { cartItems } = useSelector(state => state.cart);

  const priceTotal = useSelector(state => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.price * item.count);
    }

    return totalPrice;
  })

  return (
    <Container>

     

      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
         
            
          <Link href="/Products"><TopButton>CONTINUE SHOPPING</TopButton></Link>
          <TopTexts>
            <TopText>Shopping Bag({cartItems.length})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          {cartItems.length == 0 ?
            
            
              <TopButton disabled  type='button'>CHECKOUT NOW</TopButton>
            :
            <Link href="/checkout">
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Link>
          }
        </Top>
        <Bottom>
          <Info>
            {cartItems.length > 0 &&
              <>
                {cartItems.map(item => (
                  <>
             
                  <Item
                    key={item.id}
                    id={item.id}
                    desc={"akgag"}
                    name={item.name}
                    price={item.price}
                    count={item.count}
                    variant={item.variant}
                    image={item.img}
                  />
                  </>
                ))}
              </>
            }
            {cartItems.length === 0 &&
              <p>Nothing in the cart</p>
            }
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
             
              <SummaryItemPrice> {priceTotal.toFixed(2)} Rs</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
            
              <SummaryItemPrice ><strong>  {priceTotal.toFixed(2)} Rs</strong></SummaryItemPrice>
            </SummaryItem>
            {cartItems.length == 0? 
                <TopButton style={{width:'350px',margin:'auto'}} disabled  type='button'>CHECKOUT NOW</TopButton>
              :
              <Link href="/checkout"><Button>CHECKOUT NOW</Button></Link>
            }
          </Summary>
        </Bottom>
      </Wrapper>

    </Container>

  )
};


export default ShoppingCart
















const Container = styled.div`
margin-top:10px;
margin-bottom:20px;
`;

const Wrapper = styled.div`
  padding: 20px;
  
`;
/* ${mobile({ padding: "10px" })} */
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  transition: all .5s ease;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  &:hover {
color: #ffffff;
background-color: teal;
border: 1px solid teal;
}
`;
const TopButton1 = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`

`;
// ${mobile({ display: "none" })}
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  
`;
/* ${mobile({ flexDirection: "column" })} */
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  
`;
/* ${mobile({ flexDirection: "column" })} */
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

`;
  /* ${mobile({ margin: "5px 15px" })} */
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  
`;
/* ${mobile({ marginBottom: "20px" })} */
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  
`;

const SummaryTitle = styled.h3`
  font-weight: 300;
  text-align:center;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  
`;
const AmountBtn = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  cursor: pointer;
`;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`;
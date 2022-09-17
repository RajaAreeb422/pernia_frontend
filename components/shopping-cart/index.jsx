import { useSelector } from 'react-redux';
import Item from './item';
import styled from "styled-components";
import { useState, useEffect } from "react";
import crt from '../../styles/cart.module.css';
//import { mobile } from "../../pages/responsive";
import Link from 'next/link'
import router, { useRouter } from "next/router";
import { CropTwoTone } from '@material-ui/icons';
const ShoppingCart = () => {
    const [cartItem, setPro] = useState([])
  const { cartItems } = useSelector(state => state.cart);

  const priceTotal = useSelector(state => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.price * item.count);
    }

    return totalPrice;
  })

  const move=()=>{
    router.push(
      { pathname: "/allproducts", query: { text: 'cart' } }
     
    );
  }

  return (
    <div className={crt.container}>

     

      <div className={crt.wrapper}>
        <p className={crt.title} >YOUR BAG</p>
        <div className={crt.top}>
         

         <div className={crt.topBar}>
          <div>
          <button className={crt.chkbtn} onClick={()=>move()}>CONTINUE SHOPPING</button>
          <div className={crt.topTexts}>
          
          </div>
          </div>
          <div className={crt.show}>
          {cartItems.length == 0 ?
            
            <button className={crt.topbtn} disabled  type='button'>CHECKOUT NOW</button>
          :
          <Link href="/checkout">
          <button className={crt.topbtn}  type="filled">CHECKOUT NOW</button>
        </Link>
        }
          </div>
          
        </div>
      
        </div>
        <center><p className={crt.topP}>Shopping Bag({cartItems.length})</p></center>
        <div className={crt.bottom}>
          < div className={crt.info}>
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
                    image={item.image}
                  />
                  </>
                ))}
              </>
            }
            {cartItems.length === 0 &&
              <p>Nothing in the cart</p>
            }
          </div>
          <div className={crt.summary}>
            <p  className={crt.summaryTitle}>ORDER SUMMARY</p>
            <div className={crt.summaryItem} >
              <span>Subtotal</span>
             
              <span> {priceTotal.toFixed(2)} Rs</span>
            </div>
            <div className={crt.summaryItem} >
              <span>Estimated Shipping</span>
              <span>$ 5.90</span>
            </div>
            <div className={crt.summaryItem} >
              <span>Shipping Discount</span>
              <span>$ -5.90</span>
            </div>
            <div className={crt.summaryItem} type="total">
              <span className={crt.bold} >Total</span>
            
              <span  ><strong>  {priceTotal.toFixed(2)} Rs</strong></span>
            </div>
            {cartItems.length == 0? 
                <button   className={crt.topbtn} style={{width:'350px',margin:'auto'}} disabled  type='button'>CHECKOUT NOW</button>
              :
              <Link href="/checkout"><button className={crt.topbtn}>CHECKOUT NOW</button></Link>
            }
          </div>
        </div>
      </div>

    </div>

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
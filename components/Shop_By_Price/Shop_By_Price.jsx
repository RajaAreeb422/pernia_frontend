//import Carousel from "react-bootstrap/Carousel";
import Highlight from "react-highlight";
import { useState, useEffect } from "react";
import shop from "../../styles/shopbypri.module.css";

const Shop_By_Price = () => {
  const [box, setBox] = useState([
    {
      id: 1,
      text: "ABBB",
      img: "//cdn.shopify.com/s/files/1/2337/7003/files/Footwear_29.jpg?v=1646405401",
    },
    {
      id: 2,
      text: "Sohail",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Kurta-Set_12_c4d6cd59-a835-465b-aeaa-b6285ba69a4c.jpg?v=1646405412",
    },
    {
      id: 3,
      text: "Areebb",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Summer-Lawn_11_dc70445b-1449-42be-be15-e7c6d9e4ccb4.jpg?v=1646405423",
    },
    {
      id: 4,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Jewellery_7.jpg?v=1646405433",
    },
  
  
   
  ]);
  const borderstyle = {
    borderTop: "20px solid #F7F7F7",
  };

  return (
    <>
      <div className={shop.outline}>
        <div className={shop.borderstyle}>
          <h2 className={shop.spacing}>Shop By Price</h2>
          <div className={shop.alignment}>
            {box.map((it) => (
              <img key={it.id} src={it.img} className={shop.shopPrice}/>
            ))}
          </div>
        </div>
      </div>
      
      <div className={shop.outline}>
          <div  className={shop}>
          <img src='https://cdn.shopify.com/s/files/1/2337/7003/files/Women_s-Day_Desktop_1500x.jpg?v=1646405855'
           style={{ width:'100%'}}/>
          </div>
      </div>

    </>
  );
};
export default Shop_By_Price;

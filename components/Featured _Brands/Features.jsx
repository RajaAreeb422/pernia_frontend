
import { Carousel } from "@trendyol-js/react-carousel";
import Highlight from "react-highlight";
import { useState, useEffect } from "react";
import fea from "../../styles/features.module.css";
import axios from 'axios'
import FLeft_Item from "./FLeft_Item";
import FRight_Item from "./FRight";
import Link from 'next/link'
const Features = () => {
  const [brands, setBrands] = useState([])
  const [box, setBox] = useState([
    {
      id: 1,
      text: "ABBB",
      img: "//cdn.shopify.com/s/files/1/2337/7003/files/Baroque_40_fe6130e5-8385-494f-92c1-3c3d8a18ba72_200x.jpg?v=1646473322",
    },
    {
      id: 2,
      text: "Sohail",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Afrozeh_34_4d6ea5db-cf98-43b7-80b2-64360ce01cef_200x.jpg?v=1646473449",
    },
    {
      id: 3,
      text: "Areebb",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/sana-safinaz_20_200x.jpg?v=1646473607",
    },
    {
      id: 64,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Akbar-Aslam_15_6947fd2a-c9f1-4c72-a3f7-e0a6b018c3e3_200x.jpg?v=1646396441",
    },
    {
      id: 65,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Sanaya_6_32b91243-e296-4ec2-ad3e-d13d92786f4d_200x.jpg?v=1646473587",
    },
    {
      id: 26,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Ramsha_34_200x.jpg?v=1646473466",
    },
    {
      id: 27,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Cross-Stitch_30_502c6908-0845-49e1-b15b-e7bc91dc6580_200x.jpg?v=1646473542",
    },
    {
      id:28,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Imrozia-Premium_65_200x.jpg?v=1646473482",
    },
    {
      id: 29,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Jazmin_8_8b140f49-4792-4e7d-b686-0d11fe9575f5_200x.jpg?v=1646473359",
    },
    {
      id: 23,
      text: "Areebb",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/sana-safinaz_20_200x.jpg?v=1646473607",
    },
    {
      id: 24,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Akbar-Aslam_15_6947fd2a-c9f1-4c72-a3f7-e0a6b018c3e3_200x.jpg?v=1646396441",
    },
    {
      id: 29,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Sanaya_6_32b91243-e296-4ec2-ad3e-d13d92786f4d_200x.jpg?v=1646473587",
    },
    {
      id: 15,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Ramsha_34_200x.jpg?v=1646473466",
    },
    {
      id: 10,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Cross-Stitch_30_502c6908-0845-49e1-b15b-e7bc91dc6580_200x.jpg?v=1646473542",
    },
    {
      id: 11,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Imrozia-Premium_65_200x.jpg?v=1646473482",
    },
    {
      id: 48,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Jazmin_8_8b140f49-4792-4e7d-b686-0d11fe9575f5_200x.jpg?v=1646473359",
    },

    {
      id: 44,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Akbar-Aslam_15_6947fd2a-c9f1-4c72-a3f7-e0a6b018c3e3_200x.jpg?v=1646396441",
    },
    {
      id: 49,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Sanaya_6_32b91243-e296-4ec2-ad3e-d13d92786f4d_200x.jpg?v=1646473587",
    },
    {
      id: 35,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Ramsha_34_200x.jpg?v=1646473466",
    },
    {
      id: 30,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Cross-Stitch_30_502c6908-0845-49e1-b15b-e7bc91dc6580_200x.jpg?v=1646473542",
    },
    {
      id: 31,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Imrozia-Premium_65_200x.jpg?v=1646473482",
    },
    {
      id: 88,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Jazmin_8_8b140f49-4792-4e7d-b686-0d11fe9575f5_200x.jpg?v=1646473359",
    },
    {
      id: 98,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Jazmin_8_8b140f49-4792-4e7d-b686-0d11fe9575f5_200x.jpg?v=1646473359",
    },
    {
      id: 78,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Jazmin_8_8b140f49-4792-4e7d-b686-0d11fe9575f5_200x.jpg?v=1646473359",
    },
  ]);
  const borderstyle = {
    borderTop: "20px solid #F7F7F7",
  };
  useEffect(() => {
    let list=[]
  axios.get(`https://api.mazglobal.co.uk/maz-api/suppliers`)
  .then(resp=>{
  setBrands(resp.data.data)
  }).catch(err=>console.log(err))
       
}, [])


  return (
    <>
      <div className={fea.outline} >
        <div className={fea.borderstyle}>
          
          <center>
          <h2 className={fea.spacing}>Features Brands</h2>
          </center>
          <div className={fea.lgView}>
            {brands.length!=0?
          <Carousel show={7} slide={1} swiping={true}  
          leftArrow={<FLeft_Item/>} rightArrow={<FRight_Item/>}>
              
            {brands.map((it,i) => (
              <Link key={it.id} href="/brand/[id]" as={`/brand/${it.id}`}>
              <img key={it.id} src={box[0].img} className={fea.imgSize} />
              </Link>
            ))}
            </Carousel>:''
}
          </div>
          <div className={fea.mView}>
            {brands.length!=0?
        <>
            {brands.map((it,i) => (
              i<6?
              <Link key={it.id} href="/brand/[id]" as={`/brand/${it.id}`}>
              <img key={it.id} src={box[i].img} className={fea.imgSize} />
              </Link>:''
            ))}
            </>
           :''
}
          </div>
          
        </div>
      </div>
      <div className={fea.outline}>
          <div  className={fea.borderstyle}>
          <img src='//cdn.shopify.com/s/files/1/2337/7003/files/Faster-_-Better-Desktop-Local_1500x.jpg?v=1646410350'
         className={fea.covImg}
            />
          </div>
      </div>

    </>
  );
};
export default Features;

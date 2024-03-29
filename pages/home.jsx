import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar2 from '../components/Navbar'
import MyNavbar from '../components/Navbar2'
import Slider from '../components/Slider'
import Carosel from '../components/Carosel'
import Deals_Carosel from '../components/Deals_of_Day/Deals_Carosel'
import Features from '../components/Featured _Brands/Features'
import Finish_Touch from '../components/Finishing_Touch/Finish_Touch'

import Footer from '../components/foot/Footer'
import Newsletter from "../components/foot/Newsletter";
import ArrivalCarosel from '../components/New_Arrival/ArrivalCarosel'
import Kids_Carosel from '../components/KidsCollections/KidsCarosel'
import Men_Carosel from '../components/MenCollections/MenCarosel'
import 'bootstrap/dist/css/bootstrap.css'

import Link from "next/link";

import styled from "styled-components";
import StoreCategories from '../components/StoreCategories'
export default function Home() {
  return (
    <>
    <Head>
        <title>Pernia</title>
        <link rel="icon" href="/pernia.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
    <div className={styles.container}>
     <Navbar2/>
     <Slider/>
      <ArrivalCarosel/>
      <Deals_Carosel/>
      <Features/>
      <Kids_Carosel/>

      <Men_Carosel/>
      <StoreCategories/>
      {/* <Finish_Touch/> */}
      {/* <Shop_By_Price/> */}
      {/* <Newsletter/> */}

      <Footer />
    </div>
    </>
  )
}


// import Image from "next/image"
// import hm from '../styles/Home.module.css'
//  export default function Home() {
//   return(
    
//     <div className={hm.body1}>
//     <div className={hm.bgimg}>
//     <div className={hm.topleft}>
//      <Image src="/mazwhite.png" width='120px' height='100'/>
     
//     </div>
//     <div className={hm.middle}>
//         <Image src="/maintenance.png" height='100' width='100'/>
//       <h1>COMING SOON</h1>
//       <hr className={hm.hr1}/>
      
//     </div>
//     <div className={hm.bottomleft}>
     
//     </div>
//   </div>
//   </div>
//   )
// }
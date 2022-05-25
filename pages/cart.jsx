//import Announcement from "../components/Announcement"
import Footer from '../components/foot/Footer'
import Newsletter from "../components/foot/Newsletter"
import Navbar from "../components/Navbar"
import ShoppingCart from "../components/shopping-cart/index"
import Head from 'next/head'



const cart = () => {

return(
  <>
    
    <Navbar />
    <ShoppingCart />
    <Newsletter/>
    <Footer />

  </>
)
}

export default cart

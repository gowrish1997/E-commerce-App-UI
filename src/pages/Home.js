import React from 'react'
import Announcement from '../components/Announcement'
import Navigation from '../components/Navigation'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Product from '../components/Product'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div style={{"width":"auto"}}>
      
        <Announcement></Announcement>
      <Navigation></Navigation>
      <Slider></Slider>
      <Categories></Categories>
      <Product></Product>
      <Newsletter></Newsletter>
      <Footer></Footer>
      
    </div>
  )
}
export default Home

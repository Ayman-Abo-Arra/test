import React from 'react'
import Categories from '../categories/Categories'
import "./Home.css"
export default function Home() {
  return (
    <>
<div id="Home" className="header vh-100 "> 
<img src="/images/header1.jpg" alt="Online Shop" className=' position-absolute w-100 h-100 '/>

  <div className="container d-flex align-items-center h-100 font1 ">
    <div className="header-contant text-white w-100 position-relative  d-flex flex-column  align-items-end">
      <h1> Online Shop</h1>
      
      <h2> Clothes,Mobile,Electronics &amp;Beauty  </h2>
      <a href="#" className="  text-decoration-none nn"> Welcome Ayman Shop </a>
    </div>
  </div>
</div>
    <Categories />
    </>
  )
}

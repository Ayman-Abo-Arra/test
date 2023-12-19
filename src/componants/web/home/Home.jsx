import React from 'react'
import Categories from '../categories/Categories'
import "./Home.css"
export default function Home() {
  return (
    <>
<div id="Home" className="header vh-100 "> 
  <div className="container d-flex align-items-center h-100  ">
    <div className="header-contant text-white">
      <h1> Onlone Shop</h1>
      <h2> Clothes,Mobile,Electronics &amp;Beauty  </h2>
      <a href="#" className="  text-decoration-none nn"> Welcome Ayman Shop </a>
      <div className="social-media mt-3  d-flex justify-content-around w-50 ">
        <div className="icon border rounded-circle d-flex align-items-center justify-content-center">
             <img src="../images/Facebook.png" className='img-fluid' />
        </div>
        <div className="icon border rounded-circle d-flex align-items-center justify-content-center">
        <img src="../images/Instgram.png" className='img-fluid' />
        </div>
        <div className="icon border rounded-circle d-flex align-items-center justify-content-center">
        <img src="../images/Twiter.png" className='img-fluid' />
        </div>
        <div className="icon border rounded-circle d-flex align-items-center justify-content-center">
        <img src="../images/Whatsapp.png" className='img-fluid' />
        </div>
      </div>
    </div>
  </div>
</div>




    <Categories />
    </>
  )
}

import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
  <div>
  <div className="footer-main ">
    <div className="footer1 row pt-3">
      <div className="about-as col-md-3">
        <h4> About Us </h4>
        <p>E commerce is the process of buying and selling goods and services online. 
          It has become increasingly popular in recent years, as it offers a convenient and efficient way to shop. 
          There are many advantages to using e commerce, including the ability to compare prices, access a wider range of products, 
          and enjoy greater convenience. It is also typically faster and more convenient than traditional shopping methods.</p>

      </div>
      <div className="usefil-links col-md-3"> 
        <h4> Download </h4>
        <li> <a href="#">&gt; App Store </a> </li>
        <li> <a href="#">&gt; Google Play </a> </li>
        <li> <a href="#">&gt; Windows App</a> </li>
        <li> <a href="#">&gt; Mac App </a> </li>
      </div>
      <div className="opening-hours col-md-3">
        <h4> Products </h4>
        <li>&gt;  Web </li>
        <li>&gt; App</li>
        <li>&gt; Software </li>
        <li>&gt; Ecommerce </li>
        
      </div>
      <div className="contact-details col-md-3">
        <h4> Contact Us </h4>
        <div className="contact-details-icon"> <i className="fa fa-phone" />
          <span><a href="tel:0598653298">Phone:0598653298</a></span>
        </div>
        <div className="contact-details-icon"> <i className="fa-solid fa-location-dot" />
          <span>Address: Jenin</span>
        </div>
       
        <div className="contact-details-icon"> <i className="fa fa-envelope" />
          <span><a href="mailto:http://hello@sitename.com" className="accent-hover">Email:Ayman_Shop@gmail.com</a></span>
        </div>
        <div className="contact-details-icon"> <i className="fa-solid fa-earth-americas" />
          <span><a href="http://www.sitename.com" className="accent-hover">http://www.Ayman_shop.com</a></span>
        </div>
      </div>
    </div>
    <div className="clrfix" />
  </div>
  <div className="footer2">
    <div className="row-footer2">
     
    </div>
  </div>
</div>

  )
}

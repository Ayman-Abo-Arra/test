import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User';
import { CartContext } from '../context/Cart';
import 'primeicons/primeicons.css';
        
export default function Navbar() {

  let {count}=useContext(CartContext);
  let {userToken,setUserToken,userData,setUserData,userId,setUserId}= useContext (UserContext);
  let navigate=useNavigate();
  const logout =()=>{
    localStorage.removeItem("userToken");
    setUserToken(null);
    setUserData(null);
    setUserId(null);
    navigate('/');

  }
  
 
  return (
    <nav className="navbar navbar-expand-lg bg-nav-color border-bottom border-info-subtle">
    <div className="container">
    <a className="navbar-brand font1 border rounded-pill p-2 border-black" href="#">Ayman-shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse font" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0"> 
       
        <li className="nav-item">
          <Link className="nav-link border-end border-secondary me-5" to="/"><span className="pi pi-home"></span> Home </Link> 
        </li>

        <li className="nav-item">
          <Link className="nav-link border-end border-secondary me-5" to="/categories"><span className="pi pi-th-large"></span> Categories</Link>
        </li>

        <li className="nav-item">
        <Link className="nav-link border-end border-secondary me-5" to="/products"> <span className="pi pi-star"></span> Products</Link>
      </li>

      {userToken?
       <li className="nav-item">
        <Link className="nav-link  position-relative  me-5" to='/cart'><span className="pi pi-shopping-cart"></span> Cart
         <span className="position-absolute  start-100 translate-middle badge rounded-pill bg-warning text-black">{count} </span>  </Link>
      </li>
      :null}
     
      </ul>
      
    
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {userData!=null?userData.userName:'Acount'} <span className="pi pi-user"></span>
      </a>
      <ul className="dropdown-menu ">
        {userToken==null?<> 
        <li><Link className="dropdown-item" to="/register">Register</Link></li>
        <li><hr className="dropdown-divider" /></li>
        <li><Link className="dropdown-item" to="/login">Login</Link></li>
        </>
        :<> 
         <li><Link className="dropdown-item" to="/profile" >Profile </Link></li>
         
        <li><hr className="dropdown-divider" /></li>
        <li><Link className="dropdown-item" onClick={logout}>Log Out</Link></li>
        </>
      }
        
        
       
        
        
      </ul>
    </li>
      </ul>
    
    </div>
  </div>
</nav>
  )
}

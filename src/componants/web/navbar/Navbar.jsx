import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User';
import { CartContext } from '../context/Cart';

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
    <nav className="navbar navbar-expand-lg bg-primary-subtle">
    <div className="container">
    <a className="navbar-brand" href="#">Ayman-shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0"> 
       
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Categories</a>
        </li>

        <li className="nav-item">
        <a className="nav-link" href="#">Products</a>
      </li>

      {userToken?
       <li className="nav-item">
        <Link className="nav-link position-relative" to='/cart'>Cart <span className="position-absolute  start-100 translate-middle badge rounded-pill bg-danger text-bg-dark">{count} </span>  </Link>
      </li>
      :null}
     
      </ul>
      
    
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {userData!=null?userData.userName:'Acount'}
      </a>
      <ul className="dropdown-menu ">
        {userToken==null?<> 
        <li><Link className="dropdown-item" to="/register">Register</Link></li>
        <li><hr className="dropdown-divider" /></li>
        <li><Link className="dropdown-item" to="/login">Login</Link></li>
        </>
        :<> 
         <li><Link className="dropdown-item" to="/profile" >Profile</Link></li>
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

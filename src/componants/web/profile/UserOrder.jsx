import React, { useContext } from 'react'
import { UserContext } from '../context/User';

export default function UserOrder() {
    let { userId, loading } = useContext(UserContext);
    console.log(userId);

  if (loading) {
    return (
      <div class="d-flex justify-content-center   ">
        <div class="spinner-grow text-primary loade" role="status"></div>
      </div>
    );
  }
  return (
    <div>
    {/* <p>{userId.address}</p>
    <p>{userId.phone}</p>
    <p>{userId.couponName} </p> */}


    
  </div>  )
}

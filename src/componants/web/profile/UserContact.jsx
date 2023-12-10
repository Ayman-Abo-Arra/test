import React, { useContext } from "react";
import { UserContext } from "../context/User";

export default function UserContact() {
  let { userData, loading } = useContext(UserContext);

  if (loading) {
    return (
      <div class="d-flex justify-content-center   ">
        <div class="spinner-grow text-primary loade" role="status"></div>
      </div>
    );
  }
  return (
    <div>
      <p> Email: {userData.email} </p>
      <p>{userData.phone}</p>
    </div>
  );
}

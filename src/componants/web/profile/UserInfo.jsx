import React, { useContext } from "react";
import { UserContext } from "../context/User";

export default function UserInfo() {
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
      <img src={userData.image.secure_url} className=" rounded-circle" />
      <h2 className="pt-2">{userData.userName}</h2>
    </div>
  );
}

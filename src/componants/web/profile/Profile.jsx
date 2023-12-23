import React, { useContext } from "react";
import { UserContext } from "../context/User";
import { useQuery } from "react-query";
import style from "./Profile.module.css";
import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  let { userData, loading } = useContext(UserContext);

  if (loading) {
    return (
      <div class="d-flex justify-content-center   ">
        <div class="spinner-grow text-primary loade" role="status"></div>
      </div>
    );
  }
  return (
    <aside className={`${style.profile}`}>
      <div className={`${style.profileLinks}`}>
        <nav className="bg-warning">
          <Link to="info"> Info </Link>
          <Link to="contact">Contact </Link>
          <Link to="order">Order </Link>
        </nav>
      </div>

      <div className={`${style.userData}`}>
        <Outlet />
      </div>
    </aside>
  );
}

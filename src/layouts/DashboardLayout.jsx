import React from 'react'
import Navbar from '../componants/dashboard/navbar/Navbar'
import Footer from '../componants/dashboard/footer/Footer'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>

    )
}

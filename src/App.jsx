import { RouterProvider} from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Register from "./componants/web/register/Register.jsx";
import Login from "./componants/web/login/Login.jsx";
import Home from "./componants/web/home/Home.jsx";
import Categories from "./componants/web/categories/Categories.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import HomeDashboard from './componants/dashboard/home/Home.jsx';
import CategoriesDashboard from './componants/dashboard/categories/categories.jsx'
import { createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import {jwtDecode} from 'jwt-decode';
export default function App() {


  const [user,setUser] = useState(null);


  const saveCurrentUser = ()=>{
    const token = localStorage.getItem("userToken");
    const decoded = jwtDecode(token);
    setUser(decoded);
  }


  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
          {
            path:'register',
            element:<Register />
          },
          {
            path:'login',
            element:<Login saveCurrentUser={saveCurrentUser} />
          },
          {
            path:'home',
            element:<Home />
          },
          {
            path:'categories',
            element:<Categories />
          },
          {
            path:'*',
            element:<h2>page not found --- web</h2>
          }
      ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout />,
        children:[{
        path:'home',
        element:<HomeDashboard />
      }
      ,{
        path:'categories',
        element:<CategoriesDashboard />
      },
      {
        path:'*',
        element:<h2>page not found --- dashboard</h2>
      }
    ]
 
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

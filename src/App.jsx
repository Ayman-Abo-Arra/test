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
import { useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode';
import CategoriesDetails from "./componants/web/categories/CategoriesDetails.jsx";
import Product from "./componants/web/products/Product.jsx";
import { CartContextProvider } from "./componants/web/context/Cart.jsx";
import Cart from "./componants/web/cart/Cart.jsx";
export default function App() {


  const [user,setUser] = useState(null);


  const saveCurrentUser = ()=>{
    const token = localStorage.getItem("userToken");
    const decoded = jwtDecode(token);
    setUser(decoded);
  }
  useEffect( ()=>{
    if(localStorage.getItem("userToken")){
      saveCurrentUser();
    }

  },[])


  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout user={user} setUser={setUser}/>,
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
            index:true,
            element:<Home />
          },
          {
            path:'cart',
            element:<Cart />
          },
          {
            path:'categories',
            element:<Categories />
          },
          {
            path:'products/category/:categoryId',
            element:<CategoriesDetails />
          },
          {
            path:'product/:productId',
            element:<Product />
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
    <CartContextProvider> 
      <RouterProvider router={router} />
    </CartContextProvider>
  )
}

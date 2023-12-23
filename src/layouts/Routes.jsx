import Layout from "./Layout.jsx";
import Register from "../componants/web/register/Register.jsx";
import Login from "../componants/web/login/Login.jsx";
import Home from "../componants/web/home/Home.jsx";
import Categories from "../componants/web/categories/Categories.jsx";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import HomeDashboard from "../componants/dashboard/home/Home.jsx";
import CategoriesDashboard from "../componants/dashboard/categories/categories.jsx";
import { createBrowserRouter } from "react-router-dom";
import CategoriesDetails from "../componants/web/categories/CategoriesDetails.jsx";
import Product from "../componants/web/products/Product.jsx";
import Cart from "../componants/web/cart/Cart.jsx";
import ProtectedRoute from "../componants/web/protectedRoute/ProtectedRoute.jsx";
import Profile from "../componants/web/profile/Profile.jsx";
import UserInfo from "../componants/web/profile/UserInfo.jsx";
import UserContact from "../componants/web/profile/UserContact.jsx";
import SendCode from "../componants/web/auth/SendCode.jsx";
import ForgotPassword from "../componants/web/auth/ForgotPassword.jsx";
import UserOrder from "../componants/web/profile/UserOrder.jsx";
import Order from "../componants/web/order/Order.jsx";
import AllProduct from "../componants/web/products/AllProducts.jsx";
  export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout  />,
      children: [
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login  />,
        },
        {
          path: "sendCode",
          element: <SendCode  />,
        },
        {
          path: "forgotpassword",
          element: <ForgotPassword />,
        },
        {
          path: "createorder",
          element: <Order />,
        },
        {
          path: "profile",
          element: 
          <ProtectedRoute>
          <Profile />
        </ProtectedRoute>,
        children:[
          {
            path:"info",
            element:<UserInfo />,
          },
          {
            path:"contact",
            element:<UserContact />,
          },
          {
            path:"order",
            element:<UserOrder />,
          },
        ]
        },
        {
          index: true,
          element: <Home />,
        },
        {
          path: "cart",
          element:
          <ProtectedRoute>
             <Cart />
          </ProtectedRoute>
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "products",
          element: <AllProduct />,
        },
        {
          path: "products/category/:categoryId",
          element: <CategoriesDetails />,
        },
        {
          path: "product/:productId",
          element: <Product/>,
        },
        
        {
          path: "*",
          element: <h2>page not found --- web</h2>,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "home",
          element: <HomeDashboard />,
        },
        {
          path: "categories",
          element: <CategoriesDashboard />,
        },
        {
          path: "*",
          element: <h2>page not found --- dashboard</h2>,
        },
      ],
    },
  ]);

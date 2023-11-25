// import {createBrowserRouter,RouterProvider,} from "react-router-dom";
// import Layout from './Layout.jsx';
// import Home from '../componants/web/home/Home.jsx';
// import Categories from '../componants/web/categories/Categories.jsx';
// import DashboardLayout from './DashboardLayout.jsx';
// import HomeDashboard from '../componants/dashboard/home/Home.jsx';
// import CategoriesDashboard from '../componants/dashboard/categories/categories.jsx';
// import Register from "../componants/web/register/Register.jsx";
// import Login from "../componants/web/login/Login.jsx";

// export const router = createBrowserRouter([
//  {
//   path:'/',
//   element:<Layout />,
//    children:[
//     { 
//       path:'rigister',
//       element:<Register />

//     },
//     { 
//       path:'login',
//       element:<Login />

//     },
//     {
//       path:'home',
//       element:<Home />,
//     },
//     {
//       path:'categories',
//       element:<Categories />,
//     },
//     {
//       path:'*',
//       element:<h2> 404 page not found --- Web </h2>,
//     }
//   ]
//  },
//  {
//   path:'dashboard',
//   element:<DashboardLayout />,
//   children:[{
//     path:'home',
//     element:<HomeDashboard />
//   },
//   {
//     path:'categories',
//     element:<CategoriesDashboard />,
//   },
//   {
//     path:'*',
//     element:<h2> 404 page not found --- Dashboard </h2>,
//   }

// ]
//  }

// ]);
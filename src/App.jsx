import { RouterProvider } from "react-router-dom";
import { CartContext} from "./componants/web/context/Cart.jsx";
import  { UserContext } from "./componants/web/context/User.jsx";
import {router} from "./layouts/Routes.jsx";
import { useContext, useEffect } from "react";

export default function App() {
let {setUserToken} = useContext(UserContext); 
let {setCount,getCartContext}=useContext(CartContext);
let {quantity,setQuantity}=useContext(CartContext);

  useEffect(()=>{
    if(localStorage.getItem("userToken") != null){
      setUserToken(localStorage.getItem("userToken"));
      setCount(getCartContext().count);
      setQuantity(quantity);
    }


  },[])
 
  return (
    <RouterProvider router={router} />
     
    
  );
}

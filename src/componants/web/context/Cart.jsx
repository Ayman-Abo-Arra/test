import axios from "axios";
import { Children, createContext, useState } from "react";
import { toast } from 'react-toastify';

export const CartContext  =createContext(null);
export function CartContextProvider({children}){

    let [count,setCount]=useState(0);
    let [quantity,setQuantity]=useState(0);

    const addToCartContext = async (productId)=>{
        try{ 
            const token =localStorage.getItem("userToken");
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/cart`,{productId},
            {headers:{Authorization:`Tariq__${token}`}})
            if(data.message=='success'){
                toast.success("Product Aded Succefully");
                
              }
              setCount(++count);

              return data;
        }
        catch{
            console.log(error);
            
        }
    }

    const getCartContext = async ()=>{
        try{ 
            const token =localStorage.getItem("userToken");
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/cart`,
            {headers:{Authorization:`Tariq__${token}`}})
            
             setCount(data.count);
              return data;
        }
        catch{
            console.log(error);
        }
    }

    const removeItemContext =async(productId )=>{
        try{ 
            const token =localStorage.getItem("userToken");
            const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/removeItem`,{productId} ,
            {headers:{Authorization:`Tariq__${token}`}}
            )
            if(data.message=='success'){
                toast.success("Product Remove Succefully");
              }
              return data;
        }
        catch (error){
            console.log("error")
            console.log(error);
            
        }

    }

    const clearCartContext =async( )=>{
        try{ 
            const token =localStorage.getItem("userToken");
            console.log(token);
            const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/clear`,{},
            {headers:{Authorization:`Tariq__${token}`}}
            )
            if(data.message=='success'){
                toast.success("All Product Remove Succefully");
              }
              return data;
        }
        catch {
            console.log(error);
            
        }

    }
    const increaseQuintetyContext  =async( productId)=>{
        try{ 
            const token =localStorage.getItem("userToken");
            const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/incraseQuantity`,{productId},
            {headers:{Authorization:`Tariq__${token}`}}
            )
            if(data.message=='success'){
                toast.success("Product Add ");
              }
              return data;
        }
        catch {
            console.log(error);
            
        }

    }
    const decreaseQuintetyContext  =async( productId)=>{
        try{ 
            const token =localStorage.getItem("userToken");
            const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/decraseQuantity`,{productId},
            {headers:{Authorization:`Tariq__${token}`}}
            )
            if(data.message=='success'){
                toast.success("Product Remove ");
              }
              return data;
        }
        catch {
            console.log(error);
            
        }

    }
    
    const createOrderContext =async(users )=>{
        try{ 
            const token =localStorage.getItem("userToken");
            console.log(token);
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/order`,users,
            {headers:{Authorization:`Tariq__${token}`}}
            )
            if(data.message=='success'){
                toast.success("Create Order Succefully");
              }
              return data;
        }
        catch {            
        }

    }

    const getOrderContext =async( )=>{
        try{ 
            const token =localStorage.getItem("userToken");
            console.log(token);
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/order`,
            {headers:{Authorization:`Tariq__${token}`}}
            )
            // if(data.message=='success'){
            //     toast.success("All Product Remove Succefully");
            //   }
              return data;
        }
        catch {
            console.log(error);
            
        }

    }
    return <CartContext.Provider value={{addToCartContext,getCartContext,removeItemContext,count,setCount, clearCartContext,
   increaseQuintetyContext,decreaseQuintetyContext,getOrderContext,createOrderContext,quantity,setQuantity}}>
              {children}
    </CartContext.Provider>;
}
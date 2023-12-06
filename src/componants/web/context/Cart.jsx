import axios from "axios";
import { Children, createContext, useState } from "react";
import { toast } from 'react-toastify';
export const CartContext  =createContext(null);

export function CartContextProvider({children}){

    const addToCartContext = async (productId)=>{
        try{ 
            const token =localStorage.getItem("userToken");
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/cart`,{productId},
            {headers:{authorization:`Tariq__${token}`}})
            if(data.message=='success'){
                toast.success("Product Aded Succefully");
                
              }
              return data;
        }
        catch{
            console.log(error);
        }
    }

    const getCartContext = async ()=>{
        try{ 
            const token =localStorage.getItem("userToken");
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/cart`,
            {headers:{authorization:`Tariq__${token}`}})
            if(data.message=='success'){
                toast.success("Product Aded Succefully");
                
              }
              return data;
        }
        catch{
            console.log(error);
        }
    }
    
    return <CartContext.Provider value={{addToCartContext,getCartContext}}>
              {children}
    </CartContext.Provider>;
}
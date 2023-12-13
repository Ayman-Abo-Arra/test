import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let UserContext = createContext ();

export default function UserContextProvider({children}){
    const [userToken,setUserToken]= useState(null);
    const [userData,setUserData]= useState(null);
    const [loading,setLoading]= useState(true);
    const [userId,setUserId]= useState();

    const getUserData= async ()=>{
        if(userToken){
            const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/user/profile`,
            {headers:{Authorization:`Tariq__${userToken}`}});
            console.log(data);
            setUserData(data.user);
            setLoading(false);
        }
    }

    const getOrderContext =async( )=>{
        try{ 
            const token =localStorage.getItem("userToken");
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/order`,
            {headers:{Authorization:`Tariq__${token}`}}
            );
            setUserId(data.user);
            // if(data.message=='success'){
            //     toast.success("All Product Remove Succefully");
            //   }
              return data;
        }
        catch {
            
        }

    }
    useEffect(()=>{
        getUserData();
    },[userToken])
    

    return <UserContext.Provider value={{userToken,setUserToken,userData,setUserData,loading,userId,setUserId,getOrderContext}}>
             {children}
    </UserContext.Provider>
}
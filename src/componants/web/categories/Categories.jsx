import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';

export default function Categories() {
  const getCategoties = async ()=>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
    return data;
  }
  const {data,isLoading} = useQuery('web_categories',getCategoties);
  if(isLoading){
    return <h1> Loading.... </h1>
  }
  return (
    <div className='container'>
      <div className='row'>
        {data?.categories.length ? data ?.categories.map((category)=>
        <div className='col-lg-4' key={category._id}>
          <h2> {category.name} </h2> 
          <img src={category.image.secure_url} alt="" />

        </div>
        
      
        ): '<h2> No Category Found </h2>'
        }
      </div>
    </div>
  )
}

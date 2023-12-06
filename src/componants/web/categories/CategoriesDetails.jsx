import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
 import "../body.css";

export default function CategoriesDetails() {
    const {categoryId}=useParams();
    const getCategoryDetails = async ()=>{
        const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${categoryId}`)
        return data.products;
    }
    const {data,isLoading}= useQuery('category_datails',getCategoryDetails);
    if(isLoading){
      return(
        <div class="d-flex justify-content-center   ">
        <div class="spinner-grow text-primary loade" role="status">
        </div>
        </div>
    )
    }
  return (
    <div className='container'>

    <div className=' products row '>
      {data.length?data.map((product)=>
      <div className=' product col-md-4 mt-4 ' key={product._id}> 
            <img src={product.mainImage.secure_url} className='img-fluid' />
            <h2 className=' pt-3 text-main-color fs-5' >{product.name} </h2>
            <Link to={`/product/${product._id}`} className='text-main-color  ps-3 '> Details </Link>
            </div>
      ): <h2> No Product </h2>
    }

    </div>
    </div>
  )
}

import axios from 'axios'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Categories.css"

export default function Categories() {
  const getCategoties = async ()=>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
    return data;
  }
  const {data,isLoading} = useQuery('web_categories',getCategoties);
  if(isLoading){
    return (
       <div class="d-flex justify-content-center  ">
    <div class="spinner-grow text-primary" role="status">
    </div>
    </div>
    ) 
  }
  return (
    <div className='container'>
      <Swiper
      modules={[Navigation, Pagination,Autoplay]}
      spaceBetween={50}
      slidesPerView={5.4}
      navigation
      loop={true}
      autoplay={{
        delay:3000
      }}
      pagination={{  
        clickable: true,
       }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {data?.categories.length?data?.categories.map((category)=>
      
      <SwiperSlide key={category._id}>
        <Link to={`/products/category/${category._id}`} className='link'>
        <div className='category'>

         <img src={category.image.secure_url} className='rounded-circle'/>
         <h2 className='fs-5 '>{category.name}</h2> 
        </div>
        </Link>
         </SwiperSlide>
    ):'<h2> No Category Found </h2>' }
   
    </Swiper>
    </div>
  )
}

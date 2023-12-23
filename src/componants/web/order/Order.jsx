import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query';
import Input from '../../pages/Input';
import { useFormik } from 'formik';
import { orderSchema } from '../validatin/Validatin';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CartContext } from '../context/Cart';

export default function Order() {
  const initialValues={
    phone:'',
    address:'', 
    couponName:'',
};
const token =localStorage.getItem("userToken");
const onSubmit=async users=>{
  const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/order`,users,
  {headers:{Authorization:`Tariq__${token}`}}
  )
      if(data.message=='success'){
        formik.resetForm();
        toast.success("Order Add successfully");
    }
}
const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema:orderSchema,
});
const inputs =[
    {
        id:'phone',
        type:'tel',
        name:'phone',
        title:' phone',
        value:formik.values.phone,
    },
    {
      id:'address',
      type:'text',
      name:'address',
      title:' address',
      value:formik.values.address,
  }, 
  {
    id:'couponName',
    type:'text',
    name:'couponName',
    title:' Coupon',
    value:formik.values.couponName,
},
];
const renderInputs =inputs.map((input,index)=>
<Input 
type={input.type} 
id={input.id} 
name={input.name} 
title ={input.title}
value={input.value} 
key={index}
errors={formik.errors}
onChange={input.onChange || formik.handleChange}
onBlur={formik.handleBlur}
touched={formik.touched}
/>

)
  
    const {getCartContext,removeItemContext,increaseQuintetyContext,decreaseQuintetyContext,
        setCount,createOrderContext}= useContext(CartContext);

    const createorder = async (productId)=>{
        const res = await createOrderContext(productId);
      }
    const increaseQuintety= async (productId )=>{
      const res = await increaseQuintetyContext(productId);
      setCount(count=>count+1);
    }

    const decreaseQuintety= async (productId )=>{
      const res = await decreaseQuintetyContext(productId);
      setCount(count=>count-1);
    }

    const removecart = async (productId)=>{
      const res = await removeItemContext(productId);
    }
    const getCart= async ()=>{
        const res = await getCartContext();
        return res;
    }
    const {data,isLoading} = useQuery("cart",getCart);
    if (isLoading) {
        return (
          <div class="d-flex justify-content-center   ">
            <div class="spinner-grow text-primary loade" role="status"></div>
          </div>
        );
      }

  return ( 
  
  <div className="cart">
  <div className="container">
    <div className="row">
      <div className="cart-items">
        <div className="products" id="products">
          <div className="item">
            <div className="product-info">
              <h2>Product</h2>
            </div>
            <div className="quantity">
              <h2>Quantity</h2>
            </div>
            <div className="price">
              <h2>Price</h2>
            </div>
            <div className="subtotal">
              <h2>Subtotal</h2>
            </div>
          </div>

          {data?.products?(data.products.map((product)=>

            <div className="item" key={product._id}>
            <div className="product-info">
              <img src={product.details.mainImage.secure_url} />
              <div className="product-details">
                <h6 className=''>{product.details.name}</h6>
                <a
                          href="#"
                          onClick={() => removecart(product.details._id)}
                        >
                         
                         <span className="pi pi-trash"></span>
                        </a>
              </div>
            </div>
            <div className="quantity d-flex">
                      <span className="pt-3 pe-2 ps-2 border border-end-0 rounded-start-pill border-black">{product.quantity}</span>
                      <div className="d-flex flex-column border border-black">
                        <button
                          onClick={() => increaseQuintety(product.details._id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={17}
                            viewBox="0 0 16 17"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.37565 3.83333C8.37565 3.62622 8.20776 3.45833 8.00065 3.45833C7.79354 3.45833 7.62565 3.62622 7.62565 3.83333V8.125H3.33398C3.12688 8.125 2.95898 8.29289 2.95898 8.5C2.95898 8.7071 3.12688 8.875 3.33398 8.875H7.62565V13.1667C7.62565 13.3738 7.79354 13.5417 8.00065 13.5417C8.20776 13.5417 8.37565 13.3738 8.37565 13.1667V8.875H12.6673C12.8744 8.875 13.0423 8.7071 13.0423 8.5C13.0423 8.29289 12.8744 8.125 12.6673 8.125H8.37565V3.83333Z"
                              fill="#121212"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => decreaseQuintety(product.details._id)}
                          className="border-top border-black"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={17}
                            viewBox="0 0 16 17"
                            fill="none"
                          >
                            <path
                              d="M3.22852 8.5H12.5618"
                              stroke="#121212"
                              strokeWidth="0.75"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
            <div className="price">{product.details.price}</div>
            <div className="subtotal">{product.details.finalPrice}</div>
          </div>
             )


          ): <h2> Cart Is Empty </h2>
          }  
        </div>
      </div>

     
      
    </div>

    <div className=' p-3 w-50  pt-2  mt-3 '>
        <h2 className='pt-4'> Personal Information  </h2> 
        <form className='pt-3 ' onSubmit={formik.handleSubmit} encType='multipart/form-data'>
            {renderInputs}
        </form>

    </div>
    <div className='mt-5'>

         <button  className='text-black bg-warning pt-2 pb-2 pe-4 ps-4 border-0  rounded-pill mb-3 ' disabled={!formik.isValid} type='submit' onClick={()=>createorder(formik.values)}> Confirm </button> 
     </div>



  </div>
</div>

)
}

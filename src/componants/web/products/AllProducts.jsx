import axios from "axios";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/Cart";

export default function AllProduct() {
  const { productId } = useParams();
  const {addToCartContext}= useContext(CartContext);
  const getProduct = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/${productId}`
    );
    return data.product;
  };
  const { data, isLoading } = useQuery("product", getProduct);

  const addToCart = async (productId)=>{
    const res = await addToCartContext(productId);
  }

  if (isLoading) {
    return (
      <div class="d-flex justify-content-center   ">
        <div class="spinner-grow text-primary loade" role="status"></div>
      </div>
    );
  }

  return (
    <div className="product container ">
      <div className="row">
        <div className="col-md-6">
          {data.subImages.map((img) => (
            <img src={img.secure_url} className="p-2 w-50 h-50" />
          ))}
        </div>
      </div>
      <div className="col-md-6">

      <h2 className=" text-main-color"> {data.name} </h2>
      <p className=" text-primary fs-3">{data.price}$ </p>
      <button className="btn btn-outline-primary" onClick={()=>addToCart(data._id)}> Add To Cart </button>
      </div>
    </div>
  );
}

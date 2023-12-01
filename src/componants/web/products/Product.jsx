import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ReactImageMagnify from 'react-image-magnify';

export default function Product() {
  const { productId } = useParams();
  const getProduct = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/${productId}`
    );
    return data.product;
  };
  const { data, isLoading } = useQuery("product", getProduct);
  if (isLoading) {
    return (
      <div class="d-flex justify-content-center   ">
        <div class="spinner-grow text-primary loade" role="status"></div>
      </div>
    );
  }

  return (
    <div className="product container">
      <div className="row">
        <div className="col-lg-6">
          {data.subImages.map((img) => (
            <img src={img.secure_url} className="p-2 w-50 h-50" />
          ))}
          <h2 className="ps-5 text-main-color"> {data.name} </h2>
          <p className="ps-5 text-primary fs-3">{data.price}$ </p>
        </div>

        
      </div>
    </div>
  );
}

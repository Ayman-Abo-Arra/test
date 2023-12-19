import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import "../body.css";

export default function CategoriesDetails() {
  const { categoryId } = useParams();
  const getCategoryDetails = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/category/${categoryId}`
    );
    return data.products;
  };
  const { data, isLoading } = useQuery("category_datails", getCategoryDetails);
  // console.log(data);

  if (isLoading) {
    return (
      <div class="d-flex justify-content-center   ">
        <div class="spinner-grow text-primary loade" role="status"></div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row ps-5 ms-5">
          {data.length ? (
            data.map((product) => (
              <div className=" product col-md-3 ms-3 mt-4 border border-3 border-info-subtle rounded-4 p-3" key={product._id}>
                <img src={product.mainImage.secure_url} className="img-fluid border border-white rounded-5 w-100 " />
                <h2 className=" pt-3 pb-2 text-main-color fs-5">{product.name} </h2>
                <p>{product.ratingNumbers}</p>

                <Link
                  to={`/product/${product._id}`}
                  className="border  border-warning text-info rounded-4 p-2  "
                >
                  Details
                </Link>
              </div>
            ))
          ) : (
            <h2> No Product </h2>
          )}
       
      </div>
    </div>
  );
}

import axios from "axios";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/Cart";
import { Rating } from 'primereact/rating';



export default function Product() {
  const { productId } = useParams();
  const { addToCartContext } = useContext(CartContext);

  const getProduct = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/${productId}`
    );
    return data.product;
  };

  const { data, isLoading } = useQuery("product", getProduct);
  console.log(data);

  const addToCart = async (productId) => {
    const res = await addToCartContext(productId);
  };

  if (isLoading || !data) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-grow text-primary loade" role="status"></div>
      </div>
    );
  }

  return (
    <div className="product container ">
      <div className="row mt-3">
        <div className="col-md-12">
          {data.subImages && data.subImages.map((img) => (
            <img src={img.secure_url} className="p-2 img-fluid w-25" key={img._id} alt="Product Subimage" />
          ))}
        </div>
      </div>
      <div className="col-md-12">
        <h2 className=" font"> {data.name} </h2>
        <p className=" fs-3 font text-nav-color">Price: {data.price}$ </p>
        <h2 className="w-100 pb-3">
          <span className="text-nav-color font"> Description : </span>{" "}
          {data.description}
        </h2>

        <div>
          <button
            className="btn btn-outline-primary"
            onClick={() => addToCart(data._id)}
          >
            Add To Cart
          </button>
          <h3 className="pt-4 font">Reviews :</h3>
          {data.reviews && data.reviews.map((review) => (
            <div
              className="border-bottom border-warning ps-3 w-75"
              key={review._id}
            >
              <p className="fs-4 d-inline">{review.createdBy.userName} :</p>
              <p className="d-inline ps-2">{review.comment}</p>
              <Rating className="d-inline ps-2" value={review.rating} disabled cancel={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

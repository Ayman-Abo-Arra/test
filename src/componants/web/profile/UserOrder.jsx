import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { toast } from "react-toastify";

export default function UserOrder() {
  const getProduct = async () => {
    const token = localStorage.getItem("userToken");
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/order`, {
      headers: { Authorization: `Tariq__${token}` },
    });
   
    return data;
  };
  const { data, isLoading } = useQuery("product", getProduct);
  // console.log(data);
  if (!data || !data.orders || data.orders.length === 0) {
    return <p>No orders available</p>;
  }
  if (isLoading) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-grow text-primary loade" role="status"></div>
      </div>
    );
  }



  return (
    <div>
      {data.orders.map((order) => (
        <div className="ps-3" key={order._id}>
          <table class="table table-success table-striped border w-75">
            <tr>
              <th className="border ps-3 bg-success-subtle">address</th>
              <th className="border ps-3 bg-success-subtle">phoneNumber</th>
              <th className="border ps-3 bg-success-subtle">couponName</th>
              <th className="border ps-3 bg-success-subtle">createdAt</th>
              <th className="border ps-3 bg-success-subtle">finalPrice</th>
              <th className="border ps-3 bg-success-subtle">paymentType</th>
            </tr>
            <tr>
              <td className="border ps-2">{order.address} </td>
              <td className="border ps-2">{order.phoneNumber} </td>
              <td className="border ps-2">{order.couponName} </td>
              <td className="border ps-2">{order.createdAt} </td>
              <td className="border ps-2">{order.finalPrice} $ </td>
              <td className="border ps-2">{order.paymentType} </td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
}

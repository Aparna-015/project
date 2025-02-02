import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Products = ({ products }) => {
 

  const { id,title, price, description, image, category, rating } = products;
  const navigate=useNavigate()

  const handledetails=(id)=>{
console.log(id,"id");

navigate(`/product/${id}`)

  }

  return (
    <div className=" section bg-blue-200 m-5 p-5 w-1/5  ">
      <h1 className="font-bold">{title}</h1>

      <div className="flex justify-center m-2 p-2">
        <img src={image} alt="" width="100px" className="" />
      </div>
     

        <button  onClick={()=>handledetails(id)}  className="bg-blue-800 m-2 p-2 border border-spacing-2 text-white rounded-md ">
          View details
        </button>
       
    </div>
  );
};

export default Products;

import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaBeer, FaEye, FaPen, FaRemoveFormat, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const CoffeCard = ({ coffee, setCoffees, coffees }) => {
   const {
      product,
      taste,
      cheif,
      photo,
      _id,
      quantity,
      supplier,
      category,
      details,
   } = coffee;

   const handleDelete = (id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5000/coffee/${id}`, {
               method: "DELETE",
            })
               .then((res) => res.json())
               .then((data) => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                     Swal.fire(
                        "Deleted!",
                        "Your Coffee has been deleted.",
                        "success"
                     );
                  }
                  const remaining = coffees.filter((cof) => cof._id !== _id);
                  setCoffees(remaining);
               });
         }
      });
   };
   return (
      <div className="card py-4 card-side bg-base-100 shadow-xl">
         <figure>
            <img src={photo} alt="Movie" />
         </figure>
         <div className=" flex justify-between w-full mr-3">
            <div>
               <h2 className="card-title">{product}</h2>
               <p>{quantity}</p>
               <p>{taste}</p>
               <p>{supplier}</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
               <button className="btn btn-primary">
                  <FaEye className="text-[17px]" />
               </button>
               <Link to={`/updateCoffee/${_id}`}>
                  <button className="btn btn-active">
                     <FaPen className="text-[17px]"></FaPen>
                  </button>
               </Link>
               <button
                  className="btn btn-secondary"
                  onClick={() => {
                     handleDelete(_id);
                  }}>
                  <FaTrash className="text-[17px] text-red-500"></FaTrash>
               </button>
            </div>
         </div>
      </div>
   );
};

export default CoffeCard;

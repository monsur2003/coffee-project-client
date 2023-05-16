import React from "react";
import { FaBeer, FaEye, FaPen, FaRemoveFormat, FaTrash } from "react-icons/fa";
const CoffeCard = ({ coffee }) => {
   const {
      product,
      taste,
      cheif,
      photo,
      quantity,
      supplier,
      category,
      details,
   } = coffee;
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
               <button className="btn btn-active">
                  <FaPen className="text-[17px]"></FaPen>
               </button>
               <button className="btn btn-secondary">
                  <FaTrash className="text-[17px] text-red-500"></FaTrash>
               </button>
            </div>
         </div>
      </div>
   );
};

export default CoffeCard;

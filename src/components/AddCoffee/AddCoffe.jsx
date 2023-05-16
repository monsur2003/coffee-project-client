import React from "react";

const AddCoffe = () => {
   const handleAdd = (event) => {
      event.preventDefault();

      const form = event.target;
      const product = form.productName.value;
      const cheif = form.cheif.value;
      const quantity = form.quantity.value;
      const supplier = form.supplier.value;
      const category = form.category.value;
      const details = form.details.value;
      const photo = form.photo.value;
      const taste = form.taste.value;

      const products = {
         product,
         taste,
         cheif,
         photo,
         quantity,
         supplier,
         category,
         details,
      };
      console.log(products);
   };

   return (
      <div className="  mx-auto">
         <form
            onSubmit={handleAdd}
            className=" w-[90%] mt-10 h-[80vh] bg-sky-300  p-5  mx-auto">
            <h1 className="text-2xl text-orange-900 text-center font-bold">
               Add Coffee
            </h1>
            <p className="text-gray-700 my-2 w-[90%] mx-auto text-center">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Incidunt aut exercitationem quasi accusantium earum, quam
               asperiores quo ullam? Soluta, atque!
            </p>
            <div className="grid grid-cols-2  gap-x-5">
               <div className="mb-4">
                  <label htmlFor="productName" className="block font-bold mb-1">
                     Product Name
                  </label>
                  <input
                     type="text"
                     id="productName"
                     name="productName"
                     className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
               </div>
               <div className="mb-4">
                  <label htmlFor="productName" className="block font-bold mb-1">
                     Coffee Photo
                  </label>
                  <input
                     type="text"
                     id="productPhoto"
                     name="photo"
                     className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
               </div>
               <div className="mb-4">
                  <label htmlFor="chief" className="block font-bold mb-1">
                     Chief
                  </label>
                  <input
                     type="text"
                     name="cheif"
                     id="chief"
                     className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
               </div>
               <div className="mb-4">
                  <label htmlFor="supplier" className="block font-bold mb-1">
                     Supplier
                  </label>
                  <input
                     type="text"
                     id="supplier"
                     name="supplier"
                     className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
               </div>
               <div className="mb-4">
                  <label htmlFor="supplier" className="block font-bold mb-1">
                     Supplier
                  </label>
                  <input
                     type="text"
                     id="taste"
                     name="taste"
                     className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
               </div>
               <div className="mb-4">
                  <label htmlFor="category" className="block font-bold mb-1">
                     Category
                  </label>
                  <input
                     type="text"
                     id="category"
                     name="category"
                     className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
               </div>
               <div className="mb-4">
                  <label htmlFor="quantity" className="block font-bold mb-1">
                     Quantity
                  </label>
                  <input
                     type="number"
                     id="quantity"
                     name="quantity"
                     className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
               </div>
               <div className="mb-4">
                  <label htmlFor="details" className="block font-bold mb-1">
                     Details
                  </label>
                  <input
                     id="details"
                     name="details"
                     className="border border-gray-300 rounded px-4 py-2 w-full"
                     rows="3"></input>
               </div>
            </div>

            <button
               type="submit"
               className="bg-gray-700 w-full :bg-blue-600 text-white font-bold py-2 px-4 rounded">
               Add coffee
            </button>
         </form>
      </div>
   );
};

export default AddCoffe;

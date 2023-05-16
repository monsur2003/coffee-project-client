import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <div>
         <div className="navbar bg-blue-200">
            <div className="navbar-start">
               <a className="btn btn-ghost normal-case text-xl">Coffee shop</a>
            </div>
            <div className="navbar-center hidden gap-x-3 lg:flex">
               <Link className="font-semibold" to="/addCoffee">
                  AddCoffee
               </Link>
               <Link className="font-semibold" to="/updateCoffee">
                  Update coffee
               </Link>
            </div>
            <div className="navbar-end">
               <a className="btn">Get started</a>
            </div>
         </div>
      </div>
   );
};

export default Header;

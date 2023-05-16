import { useLoaderData } from "react-router-dom";
import Header from "./components/AddCoffee/Header/Header";
import CoffeCard from "./components/AddCoffee/CoffeesCard/CoffeCard";
import { useState } from "react";

function App() {
   const loadedCoffees = useLoaderData();

   const [coffees, setCoffees] = useState(loadedCoffees);

   return (
      <>
         <Header></Header>
         <div className="grid md:grid-cols-2 py-4 mt-4 gap-5 w-[80%] mx-auto">
            {coffees.map((coffee) => (
               <CoffeCard
                  coffees={coffees}
                  setCoffees={setCoffees}
                  key={coffee._id}
                  coffee={coffee}></CoffeCard>
            ))}
         </div>
      </>
   );
}

export default App;

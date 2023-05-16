import { useLoaderData } from "react-router-dom";
import Header from "./components/AddCoffee/Header/Header";
import CoffeCard from "./components/AddCoffee/CoffeesCard/CoffeCard";

function App() {
   const coffees = useLoaderData();

   return (
      <>
         <Header></Header>
         <div className="grid md:grid-cols-2 py-4 mt-4 gap-5 w-[80%] mx-auto">
            {coffees.map((coffee) => (
               <CoffeCard key={coffee._id} coffee={coffee}></CoffeCard>
            ))}
         </div>
      </>
   );
}

export default App;

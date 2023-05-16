import { useLoaderData } from "react-router-dom";
import Header from "./components/AddCoffee/Header/Header";
import CoffeCard from "./components/AddCoffee/CoffeesCard/CoffeCard";

function App() {
   const coffees = useLoaderData();
   console.log(coffes);
   return (
      <>
         <Header></Header>
         <div>
            {coffees.map((coffee) => (
               <CoffeCard key={coffee._id} coffee={coffee}></CoffeCard>
            ))}
         </div>
      </>
   );
}

export default App;

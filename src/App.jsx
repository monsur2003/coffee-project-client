import { useLoaderData } from "react-router-dom";
import Header from "./components/AddCoffee/Header/Header";

function App() {
   const coffes = useLoaderData();
   console.log(coffes);
   return (
      <>
         <Header></Header>
         <div>here is you coffe</div>
      </>
   );
}

export default App;

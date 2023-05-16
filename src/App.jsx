import { useLoaderData } from "react-router-dom";

function App() {
   const coffes = useLoaderData();
   console.log(coffes);
   return (
      <>
         <h2 className="text-6xl text-purple-600">Hello yeaaaaaaaaaah world</h2>
      </>
   );
}

export default App;

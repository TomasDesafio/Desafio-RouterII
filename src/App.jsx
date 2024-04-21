import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Personajes from "./views/Personajes";


const App = () => {
  

  return (
    <div>
      
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/personajes/:id"
            element={<Personajes />}
          />
 
        </Routes>
        
    </div>
  );
};
export default App;

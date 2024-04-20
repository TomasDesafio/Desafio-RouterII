import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Personajes from "./views/Personajes";
import { MyContextProvider } from "./context/Apicontext";

const App = () => {
  

  return (
    <div>
      <MyContextProvider>
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
        </MyContextProvider>
    </div>
  );
};
export default App;

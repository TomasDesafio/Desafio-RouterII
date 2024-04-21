import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useMyContext } from '../context/Apicontext';
import Personajes from "./Personajes";



const Home = () => {
  //const {fetchData} = useMyContext();
  const [id,setId]=useState("")
  const navigate= useNavigate()
 


  const handleChange=(e) =>{
    setId(e.target.value.toLowerCase())
  }

  const handleSubmit=(e) =>{
    e.preventDefault();    
    navigate(`/personajes/${id}`)
    
   

  }




  return <div className="mt-5">
    <h3>Selecciona el superheroe</h3>
    <form onSubmit={handleSubmit}>         
    <input
      type="text"
      min="1"
      max="5"
      value={id}
      onChange={handleChange}
      
      />
      <button type="submit">Submit</button> 
      </form>
      
      
     
      
    
    
    

  
  
  
  </div>;
};
export default Home;

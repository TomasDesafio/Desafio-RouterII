import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { useMyContext } from '../context/Apicontext';


    
const Personajes = () => {
  const{id}=useParams()
  //console.log(id)
  //const [indicadorData, setIndicadorData] = useState(null);
  //const {fetchData,indicadorData,setIndicadorData} = useMyContext()
  //fetchData(id)
  //console.log([indicadorData[1]])
  const [indicadorData, setIndicadorData] = useState(null)  
  
  
  const fetchData = async () => {
    if (id !== '') {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error(
            'No se encontraron datos para el indicador especificado.'
          );
        }
        const data = await response.json();
        setIndicadorData(data);
        /*const datafiltrada=[data].map((element) => {
          const {forms,stats,types,sprites}=element;
            return {
              forms,
              stats,
              types,
              sprites
            }
            });
        setIndicadorData(datafiltrada);
        //console.log(datafiltrada[0].forms[0].name) //
        //datafiltrada[0].forms[0].name  ruta del nombre*/

        
        
        
        
      } catch (error) {
        console.error('Error al obtener datos del indicador:', error.message);
        setIndicadorData(null);
      }
    }
  };

  fetchData(id)
  console.log([indicadorData][0])

  
  
  return (
    <div>
        <h1></h1>
        
      
    </div>
  )
}
export default Personajes
// context.js
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);


export const MyContextProvider = ({ children }) => {
  const [indicadorData, setIndicadorData] = useState(null)  
  const fetchData = async (id) => {
        if (id !== '') {
          try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); 
            if (!response.ok) {
              throw new Error(
                'No se encontraron datos para el indicador especificado.'
              );
            }
            const data = await response.json();
            const datafiltrada=[data].map((element) => {
              const {forms,stats,types,sprites}=element;
                return {
                  forms,
                  stats,
                  types,
                  sprites
                }
                });
            setIndicadorData(datafiltrada);
            //console.log(datafiltrada[0].forms[0].name)
            //datafiltrada[0].forms[0].name  ruta del nombre
            
            
            
          } catch (error) {
            console.error('Error al obtener datos del indicador:', error.message);
            setIndicadorData(null);
          }
        }
      };

  



  return (
    <MyContext.Provider value={{ fetchData,indicadorData,setIndicadorData }}>
      {children}
    </MyContext.Provider>
  );
};
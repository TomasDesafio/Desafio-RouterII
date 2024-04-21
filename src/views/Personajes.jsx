import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useMyContext } from '../context/Apicontext';



function Personajes() {
  const [pokemon, setPokemon] = useState(null);
  const{id}=useParams()

  useEffect(() => {
    const getPokemonInfo = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error al obtener información del Pokémon:', error);
      }
    };

    getPokemonInfo();
  }, [id]);
  //console.log(pokemon)

  return (
    <div className="App">
  
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>{pokemon.stats[0].stat.name}</p>   <p>{pokemon.stats[0].base_stat}</p>
          <p>{pokemon.stats[1].stat.name}</p>   <p>{pokemon.stats[1].base_stat}</p>
          <p>{pokemon.stats[2].stat.name}</p>   <p>{pokemon.stats[2].base_stat}</p>
          <p>{pokemon.stats[3].stat.name}</p>   <p>{pokemon.stats[3].base_stat}</p>
          <p>{pokemon.stats[4].stat.name}</p>   <p>{pokemon.stats[4].base_stat}</p>
          <p>{pokemon.stats[5].stat.name}</p>   <p>{pokemon.stats[5].base_stat}</p>
          <p>{pokemon.types[0].type.name}</p>   
        </div>
      )}
    </div>
  );
}

export default Personajes;


    

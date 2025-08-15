import { useEffect, useState } from "react";

interface Props{
    id:number,
}

interface Pokemon {
    id:number;
    name:string;
    imagenUrl:string;
}



export const usePokemon = ({id}:Props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<Pokemon|null>(null);

    const getPokemonById = async(id:number) =>{
        setIsLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data= await response.json();

        setPokemon({
            id:id,
            name:data.name,
            imagenUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        })
        setIsLoading(false);
    }

    useEffect(() => {
      getPokemonById(id)
    
    }, [id])
    




  return {
    isLoading,
    pokemon,


    formattedId: id.toString().padStart(3,'0'),
  }
}
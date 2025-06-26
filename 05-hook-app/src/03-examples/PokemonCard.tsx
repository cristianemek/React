import { useLayoutEffect, useRef } from "react";
import type { PokemonData } from "../types/pokemon.types"

export const PokemonCard = ({ id, name, sprites }: PokemonData) => {

    useLayoutEffect(() => {
      
        if (h2Ref.current){
        const {height, width} = h2Ref.current.getBoundingClientRect();
            console.log({height,width})
    }
    
    }, [name])


    const h2Ref = useRef<HTMLHeadingElement>(null);

    return (
        <section style={{ height: 200, display:"flex", flexDirection:"row" }} className='card'>
            <h2 ref={h2Ref} className="text-capitalize">#{id} - {name}</h2>
            {/* imagenes */}

            <div>
                {
                   sprites?.map(sprite => (
                        <img 
                        key={sprite}
                        src={sprite} 
                        alt={name} />
                   ))
                }
            </div>
        </section>
    )
}
